<?php
/**
 * Bulverse Native WHMCS Provisioning Module for Contabo Cloud API
 *
 * Automates provisioning, power management, suspension, and teardown
 * of Cloud VPS instances via Contabo's official REST API (api.contabo.com).
 *
 * @package    Bulverse
 * @subpackage WHMCS Provisioning Modules
 * @author     Bulverse Cloud Architecture Team
 * @copyright  2026 Bulverse Limited
 * @license    Proprietary
 */

if (!defined("WHMCS")) {
    die("This file cannot be accessed directly");
}

/**
 * Module metadata definition
 */
function bulverse_contabo_MetaData()
{
    return [
        'DisplayName' => 'Bulverse Contabo Cloud VPS',
        'APIVersion' => '1.1',
        'RequiresServer' => true,
        'DefaultNonSSLPort' => '443',
        'DefaultSSLPort' => '443',
        'ServiceSingleSignOnLabel' => 'Login to Contabo Console',
    ];
}

/**
 * Module configuration options for WHMCS Products
 */
function bulverse_contabo_ConfigOptions()
{
    return [
        'productId' => [
            'FriendlyName' => 'Contabo Product ID',
            'Type' => 'dropdown',
            'Options' => [
                'V1' => 'Cloud VPS 1 (4 vCPU / 6 GB RAM / 100 GB NVMe)',
                'V2' => 'Cloud VPS 2 (6 vCPU / 16 GB RAM / 200 GB NVMe)',
                'V3' => 'Cloud VPS 3 (8 vCPU / 30 GB RAM / 400 GB NVMe)',
                'V4' => 'Cloud VPS 4 (10 vCPU / 60 GB RAM / 800 GB NVMe)',
            ],
            'Default' => 'V1',
            'Description' => 'Select the underlying Contabo compute hardware plan.',
        ],
        'region' => [
            'FriendlyName' => 'Datacenter Region',
            'Type' => 'dropdown',
            'Options' => [
                'EU' => 'European Union (Germany)',
                'UK' => 'United Kingdom (London)',
                'US-central' => 'United States (Central - St. Louis)',
                'US-east' => 'United States (East - New York)',
                'US-west' => 'United States (West - Seattle)',
                'SIN' => 'Singapore (Asia)',
            ],
            'Default' => 'EU',
            'Description' => 'Target deployment datacenter.',
        ],
        'defaultImageId' => [
            'FriendlyName' => 'Default OS Image ID',
            'Type' => 'text',
            'Size' => '40',
            'Default' => 'afecbb85-e2fc-46f0-9684-b46b1faf00bb',
            'Description' => 'e.g. ubuntu-22.04, debian-12, almalinux-9',
        ],
    ];
}

/**
 * Helper to obtain an OAuth2 Bearer Access Token from Contabo
 */
function bulverse_contabo_get_token($params)
{
    $serverUsername = $params['serverusername']; // API User (email)
    $serverPassword = $params['serverpassword']; // API Password
    $clientId = $params['serveraccesshash'];     // Stored in accesshash or custom fields
    
    // Contabo expects client_id and client_secret
    // In WHMCS server config:
    // serveraccesshash can be formatted as: client_id:client_secret
    // or client_id in accesshash and secret in custom field.
    $clientSecret = '';
    if (strpos($clientId, ':') !== false) {
        list($clientId, $clientSecret) = explode(':', $clientId, 2);
    }

    $tokenUrl = 'https://auth.contabo.com/auth/realms/contabo/protocol/openid-connect/token';
    
    $postFields = http_build_query([
        'client_id' => trim($clientId),
        'client_secret' => trim($clientSecret),
        'username' => trim($serverUsername),
        'password' => trim($serverPassword),
        'grant_type' => 'password',
    ]);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $tokenUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($curlError) {
        throw new Exception("Contabo Auth Connection Error: " . $curlError);
    }

    $data = json_decode($response, true);
    if ($httpCode !== 200 || empty($data['access_token'])) {
        $errorMsg = isset($data['error_description']) ? $data['error_description'] : (isset($data['error']) ? $data['error'] : 'HTTP ' . $httpCode);
        throw new Exception("Contabo Auth Failed: " . $errorMsg);
    }

    return $data['access_token'];
}

/**
 * Helper to make authenticated Contabo API requests
 */
function bulverse_contabo_uuid4()
{
    $data = random_bytes(16);
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80);
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

function bulverse_contabo_api_request($endpoint, $method = 'GET', $body = null, $token = '')
{
    $url = 'https://api.contabo.com' . $endpoint;
    $ch = curl_init();

    $headers = [
        'Authorization: Bearer ' . $token,
        'Content-Type: application/json',
        'x-request-id: ' . bulverse_contabo_uuid4(),
    ];

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 35);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);

    if ($body !== null) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
    }

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($curlError) {
        throw new Exception("Contabo API Error: " . $curlError);
    }

    $data = json_decode($response, true);
    logModuleCall('bulverse_contabo', $endpoint, ['method' => $method, 'body' => $body], $response, $data);

    if ($httpCode >= 400) {
        $msg = isset($data['message']) ? $data['message'] : 'HTTP Error ' . $httpCode;
        throw new Exception("Contabo API returned error (" . $httpCode . "): " . $msg);
    }

    return $data;
}

/**
 * Test Server Connection from WHMCS Admin
 */
function bulverse_contabo_TestConnection($params)
{
    try {
        $token = bulverse_contabo_get_token($params);
        $instances = bulverse_contabo_api_request('/v1/compute/instances?size=1', 'GET', null, $token);
        return ['success' => true, 'error' => ''];
    } catch (Exception $e) {
        return ['success' => false, 'error' => $e->getMessage()];
    }
}

/**
 * Provision / Create New Instance
 */
function bulverse_contabo_CreateAccount($params)
{
    try {
        $token = bulverse_contabo_get_token($params);

        $productId = !empty($params['configoption1']) ? $params['configoption1'] : 'V1';
        $region = !empty($params['configoption2']) ? $params['configoption2'] : 'EU';
        $imageId = !empty($params['configoption3']) ? $params['configoption3'] : 'ubuntu-22.04';

        // Check if customer selected an OS in custom fields or config options
        if (!empty($params['customfields']['os'])) {
            $imageId = $params['customfields']['os'];
        }

        $domain = !empty($params['domain']) ? $params['domain'] : 'vps-' . $params['serviceid'] . '.bulverse.cloud';
        $rootPassword = !empty($params['password']) ? $params['password'] : bin2hex(random_bytes(8)) . 'A1!';

        $payload = [
            'productId' => $productId,
            'region' => $region,
            'imageId' => $imageId,
            'displayName' => $domain,
            'rootPassword' => $rootPassword,
            'period' => 1,
        ];

        $result = bulverse_contabo_api_request('/v1/compute/instances', 'POST', $payload, $token);

        if (empty($result['data'][0]['instanceId'])) {
            throw new Exception("Instance creation initiated, but no instanceId was returned.");
        }

        $instanceId = $result['data'][0]['instanceId'];
        
        // Save the external instance ID in WHMCS service notes or customfield
        \WHMCS\Database\Capsule::table('tblhosting')
            ->where('id', $params['serviceid'])
            ->update([
                'username' => 'root',
                'password' => encrypt($rootPassword),
                'subscriptionid' => $instanceId,
            ]);

        // Attempt to fetch IP address if immediately available
        sleep(3);
        try {
            $instanceDetail = bulverse_contabo_api_request('/v1/compute/instances/' . $instanceId, 'GET', null, $token);
            if (!empty($instanceDetail['data'][0]['ipConfig']['v4']['ip'])) {
                $assignedIp = $instanceDetail['data'][0]['ipConfig']['v4']['ip'];
                \WHMCS\Database\Capsule::table('tblhosting')
                    ->where('id', $params['serviceid'])
                    ->update(['dedicatedip' => $assignedIp]);
            }
        } catch (Exception $ipEx) {
            // IP might still be provisioning asynchronously; cron or client area will update it.
        }

        return 'success';
    } catch (Exception $e) {
        return $e->getMessage();
    }
}

/**
 * Suspend Account on Overdue Payment
 */
function bulverse_contabo_SuspendAccount($params)
{
    try {
        $token = bulverse_contabo_get_token($params);
        $instanceId = $params['subscriptionid'];

        if (empty($instanceId)) {
            throw new Exception("No Contabo instance ID associated with this service.");
        }

        bulverse_contabo_api_request('/v1/compute/instances/' . $instanceId . '/actions/stop', 'POST', null, $token);
        return 'success';
    } catch (Exception $e) {
        return $e->getMessage();
    }
}

/**
 * Unsuspend Account on Late Payment
 */
function bulverse_contabo_UnsuspendAccount($params)
{
    try {
        $token = bulverse_contabo_get_token($params);
        $instanceId = $params['subscriptionid'];

        if (empty($instanceId)) {
            throw new Exception("No Contabo instance ID associated with this service.");
        }

        bulverse_contabo_api_request('/v1/compute/instances/' . $instanceId . '/actions/start', 'POST', null, $token);
        return 'success';
    } catch (Exception $e) {
        return $e->getMessage();
    }
}

/**
 * Terminate Account on Cancellation
 */
function bulverse_contabo_TerminateAccount($params)
{
    try {
        $token = bulverse_contabo_get_token($params);
        $instanceId = $params['subscriptionid'];

        if (empty($instanceId)) {
            throw new Exception("No Contabo instance ID associated with this service.");
        }

        bulverse_contabo_api_request('/v1/compute/instances/' . $instanceId . '/cancel', 'POST', null, $token);
        return 'success';
    } catch (Exception $e) {
        return $e->getMessage();
    }
}

/**
 * Client Area Custom Action Buttons
 */
function bulverse_contabo_ClientAreaCustomButtonArray()
{
    return [
        "Reboot Server" => "reboot",
        "Start Server" => "start",
        "Stop Server" => "stop",
    ];
}

function bulverse_contabo_reboot($params)
{
    try {
        $token = bulverse_contabo_get_token($params);
        $instanceId = $params['subscriptionid'];
        bulverse_contabo_api_request('/v1/compute/instances/' . $instanceId . '/actions/restart', 'POST', null, $token);
        return 'success';
    } catch (Exception $e) {
        return $e->getMessage();
    }
}

function bulverse_contabo_start($params)
{
    try {
        $token = bulverse_contabo_get_token($params);
        $instanceId = $params['subscriptionid'];
        bulverse_contabo_api_request('/v1/compute/instances/' . $instanceId . '/actions/start', 'POST', null, $token);
        return 'success';
    } catch (Exception $e) {
        return $e->getMessage();
    }
}

function bulverse_contabo_stop($params)
{
    try {
        $token = bulverse_contabo_get_token($params);
        $instanceId = $params['subscriptionid'];
        bulverse_contabo_api_request('/v1/compute/instances/' . $instanceId . '/actions/stop', 'POST', null, $token);
        return 'success';
    } catch (Exception $e) {
        return $e->getMessage();
    }
}

/**
 * Client Area Live Console Display
 */
function bulverse_contabo_ClientArea($params)
{
    $instanceId = $params['subscriptionid'];
    $ip = $params['dedicatedip'];
    $status = 'Active';

    return [
        'tabOverviewReplacementTemplate' => null,
        'templatefile' => 'clientarea',
        'vars' => [
            'instanceId' => $instanceId,
            'ipAddress' => $ip,
            'serverStatus' => $status,
        ],
    ];
}
