<div style="margin-bottom:32px;">
  <h1 style="font-family:var(--bulverse-font-display); font-size:28px; font-weight:700; margin:0 0 8px 0; color:#FFFFFF;">
    Infrastructure Console
  </h1>
  <p style="color:var(--bulverse-text-muted); margin:0; font-size:15px;">
    Welcome back, {$clientsdetails.firstname}. Monitor running instances, IP allocations, and resource status.
  </p>
</div>

<div class="bulverse-stat-grid">
  <div class="bulverse-stat-card">
    <div class="bulverse-stat-label">Active Compute Instances</div>
    <div class="bulverse-stat-value">{$clientsstats.productsnumactive}</div>
  </div>
  <div class="bulverse-stat-card">
    <div class="bulverse-stat-label">Pending Invoices</div>
    <div class="bulverse-stat-value">{$clientsstats.numunpaidinvoices}</div>
  </div>
  <div class="bulverse-stat-card">
    <div class="bulverse-stat-label">Support Tickets</div>
    <div class="bulverse-stat-value">{$clientsstats.numactivetickets}</div>
  </div>
  <div class="bulverse-stat-card">
    <div class="bulverse-stat-label">Fleet Health</div>
    <div class="bulverse-stat-value" style="color:#10B981; font-size:22px; display:flex; align-items:center; gap:8px;">
      <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:#10B981;"></span>
      100% Operational
    </div>
  </div>
</div>

<div class="bulverse-table-container">
  <div class="bulverse-table-header">
    <h3 style="font-family:var(--bulverse-font-display); font-size:18px; margin:0; color:#FFFFFF;">
      Your Cloud Instances & Services
    </h3>
    <a href="{$WEB_ROOT}/cart.php" class="bulverse-btn-primary" style="text-decoration:none; font-size:13px;">
      + Deploy New Server
    </a>
  </div>
  <div style="padding:24px;">
    {if $services}
      <table style="width:100%; border-collapse:collapse; text-align:left;">
        <thead>
          <tr style="border-bottom:1px solid var(--bulverse-border); color:var(--bulverse-text-muted); font-size:12px; text-transform:uppercase;">
            <th style="padding:12px 16px;">Service / Node</th>
            <th style="padding:12px 16px;">Primary IP</th>
            <th style="padding:12px 16px;">Next Due Date</th>
            <th style="padding:12px 16px;">Status</th>
            <th style="padding:12px 16px; text-align:right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          {foreach from=$services item=service}
          <tr style="border-bottom:1px solid var(--bulverse-border);">
            <td style="padding:16px; font-weight:600; color:#FFFFFF;">
              {$service.product} <br>
              <span style="font-size:12px; color:var(--bulverse-text-muted); font-family:var(--bulverse-font-mono);">{$service.domain}</span>
            </td>
            <td style="padding:16px; font-family:var(--bulverse-font-mono); color:#00D2FF; font-size:13px;">
              {$service.dedicatedip|default:'Dynamic Allocation'}
            </td>
            <td style="padding:16px; color:var(--bulverse-text-muted); font-size:13px;">
              {$service.nextduedate}
            </td>
            <td style="padding:16px;">
              <span class="bulverse-status-pill bulverse-status-active">
                ● {$service.status}
              </span>
            </td>
            <td style="padding:16px; text-align:right;">
              <a href="{$WEB_ROOT}/clientarea.php?action=productdetails&id={$service.id}" style="color:#1B4DF5; text-decoration:none; font-weight:600; font-size:13px;">
                Manage Node →
              </a>
            </td>
          </tr>
          {/foreach}
        </tbody>
      </table>
    {else}
      <div style="text-align:center; padding:48px 0; color:var(--bulverse-text-muted);">
        <p style="font-size:16px; margin-bottom:16px;">No active compute instances provisioned yet.</p>
        <a href="{$WEB_ROOT}/cart.php" class="bulverse-btn-primary" style="text-decoration:none; display:inline-block;">
          Deploy Your First Cloud VPS
        </a>
      </div>
    {/if}
  </div>
</div>
