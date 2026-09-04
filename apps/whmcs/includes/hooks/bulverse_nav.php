<?php
/**
 * Bulverse Custom WHMCS Navigation & Branding Hook
 * Automatically injects custom dark-mode styling and streamlines the client dashboard
 */

use WHMCS\View\Menu\Item as MenuItem;

add_hook('ClientAreaPrimaryNavbar', 1, function (MenuItem $primaryNavbar) {
    // Rebrand and streamline primary navigation for pure infrastructure focus
    if (!is_null($primaryNavbar->getChild('Services'))) {
        $primaryNavbar->getChild('Services')->setLabel('Compute Fleet');
    }
    if (!is_null($primaryNavbar->getChild('Billing'))) {
        $primaryNavbar->getChild('Billing')->setLabel('Invoices & Plans');
    }
    if (!is_null($primaryNavbar->getChild('Support'))) {
        $primaryNavbar->getChild('Support')->setLabel('24/7 Operations Support');
    }
});

add_hook('ClientAreaHeadOutput', 1, function ($vars) {
    // Inject precision brand favicon and meta
    return <<<HTML
    <link rel="icon" type="image/svg+xml" href="/brand/favicon.svg">
    <meta name="theme-color" content="#030611">
HTML;
});
