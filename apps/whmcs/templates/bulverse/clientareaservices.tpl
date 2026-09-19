<!-- VULTR-STYLE INSTANCES CONSOLE HEADER -->
<div class="console-page-header">
  <h1 class="console-page-title">Instances</h1>
  <div style="display:flex; align-items:center; gap:10px;">
    <a href="https://bulverse.cloud" target="_blank" class="topbar-link" style="background:#FFFFFF; border:1px solid var(--console-border); padding:6px 12px; border-radius:6px; font-size:12.5px;">
      Documentation
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
    </a>
    <a href="https://bulverse.cloud" target="_blank" class="topbar-link" style="background:#FFFFFF; border:1px solid var(--console-border); padding:6px 12px; border-radius:6px; font-size:12.5px;">
      API
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
    </a>
  </div>
</div>

<!-- FLEET STATS TELEMETRY -->
<div class="console-stat-grid">
  <div class="console-stat-card">
    <div class="stat-card-label">Active Fleet</div>
    <div class="stat-card-value" style="color:var(--console-primary);">{$clientsstats.productsnumactive|default:0}</div>
  </div>
  <div class="console-stat-card">
    <div class="stat-card-label">Unpaid Invoices</div>
    <div class="stat-card-value" style="{if $clientsstats.numunpaidinvoices > 0}color:#EF4444;{else}color:#10B981;{/if}">
      {$clientsstats.numunpaidinvoices|default:0}
    </div>
  </div>
  <div class="console-stat-card">
    <div class="stat-card-label">Tickets</div>
    <div class="stat-card-value">{$clientsstats.numactivetickets|default:0}</div>
  </div>
  <div class="console-stat-card">
    <div class="stat-card-label">Fleet SLA</div>
    <div class="stat-card-value" style="color:#10B981; font-size:18px; display:flex; align-items:center; gap:6px;">
      <span style="width:8px; height:8px; border-radius:50%; background:#10B981; display:inline-block;"></span>
      99.9% Uptime
    </div>
  </div>
</div>

<!-- ACTION TOOLBAR (Search + Create Instance) -->
<div class="console-action-bar">
  <div class="console-search-box">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    <input type="text" id="instanceSearchInput" placeholder="Search instances..." onkeyup="filterInstancesTable()">
  </div>

  <a href="{$WEB_ROOT}/cart.php" class="btn-create-instance">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    Create Instance +
  </a>
</div>

<!-- INSTANCES CONTAINER -->
<div class="console-card">
  {if $services && count($services) > 0}
    <!-- DESKTOP / TABLET TABLE VIEW -->
    <div class="table-responsive-wrapper">
      <table class="instances-table">
        <thead>
          <tr>
            <th>Name / Label</th>
            <th>Location</th>
            <th>OS / Image</th>
            <th>IP / Connectivity</th>
            <th>Next Due Date</th>
            <th>Status</th>
            <th>Charges</th>
            <th style="text-align:right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          {foreach from=$services item=service}
          <tr>
            <td>
              <div class="instance-label-col">
                <div class="instance-os-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                </div>
                <div>
                  <a href="{$WEB_ROOT}/clientarea.php?action=productdetails&id={$service.id}" class="instance-name">
                    {$service.product}
                  </a>
                  <div class="instance-subtext">
                    {$service.domain|default:'compute-node-'|cat:$service.id}
                  </div>
                </div>
              </div>
            </td>
            <td>
              <span class="location-pill">
                <span>🇩🇪</span>
                <span>Frankfurt, DE</span>
              </span>
            </td>
            <td>
              <span style="font-size:13px; color:var(--console-text-body); font-weight:500;">
                Linux OS / Cloud-Init
              </span>
            </td>
            <td>
              {if $service.dedicatedip}
                <div class="ip-copy-group" onclick="copyToClipboard('{$service.dedicatedip}', this)" title="Click to Copy" style="cursor:pointer;">
                  <span>{$service.dedicatedip}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </div>
              {else}
                <span style="font-size:12px; color:var(--console-text-muted); font-family:var(--font-mono);">
                  Dynamic DHCP
                </span>
              {/if}
            </td>
            <td>
              <span style="font-size:13px; color:var(--console-text-muted);">
                {$service.nextduedate}
              </span>
            </td>
            <td>
              <span class="status-pill {$service.status}">
                <span class="status-dot"></span>
                {$service.status}
              </span>
            </td>
            <td>
              <span style="font-weight:600; font-size:13.5px; color:var(--console-text-heading);">
                {$service.amount}
              </span>
            </td>
            <td style="text-align:right;">
              <a href="{$WEB_ROOT}/clientarea.php?action=productdetails&id={$service.id}" class="btn-manage-node">
                Manage →
              </a>
            </td>
          </tr>
          {/foreach}
        </tbody>
      </table>
    </div>

    <!-- MOBILE CARD VIEW (< 768px for clean, touch-friendly display) -->
    <div class="mobile-instances-list">
      {foreach from=$services item=service}
        <div class="mobile-instance-card">
          <div class="mobile-instance-top">
            <div class="instance-label-col">
              <div class="instance-os-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect></svg>
              </div>
              <div>
                <a href="{$WEB_ROOT}/clientarea.php?action=productdetails&id={$service.id}" class="instance-name">
                  {$service.product}
                </a>
                <div class="instance-subtext">{$service.domain|default:'compute-node-'|cat:$service.id}</div>
              </div>
            </div>
            <span class="status-pill {$service.status}">
              <span class="status-dot"></span>
              {$service.status}
            </span>
          </div>

          <div class="mobile-instance-details">
            <div class="mobile-detail-item">
              <span class="mobile-detail-label">Location</span>
              <span class="location-pill">🇩🇪 Frankfurt</span>
            </div>
            <div class="mobile-detail-item">
              <span class="mobile-detail-label">IP Address</span>
              {if $service.dedicatedip}
                <span class="ip-copy-group" onclick="copyToClipboard('{$service.dedicatedip}', this)" style="cursor:pointer; width:fit-content;">
                  {$service.dedicatedip}
                </span>
              {else}
                <span style="color:#64748B; font-family:var(--font-mono); font-size:12px;">Dynamic DHCP</span>
              {/if}
            </div>
          </div>

          <div class="mobile-instance-bottom">
            <div>
              <span style="font-size:11px; color:#64748B; text-transform:uppercase;">Charges:</span>
              <strong style="font-size:13.5px; color:#0F172A; margin-left:4px;">{$service.amount}</strong>
            </div>
            <a href="{$WEB_ROOT}/clientarea.php?action=productdetails&id={$service.id}" class="btn-manage-node">
              Manage Node →
            </a>
          </div>
        </div>
      {/foreach}
    </div>

  {else}
    <!-- VULTR EMPTY STATE (Exact replica of user screenshot 1) -->
    <div class="vultr-empty-state">
      <div class="vultr-empty-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      </div>
      <h3 class="vultr-empty-title">No Instances</h3>
      <p class="vultr-empty-desc">
        Deploy a new server at any of our worldwide datacenter locations.
      </p>
      <a href="{$WEB_ROOT}/cart.php" class="btn-deploy-server">
        Deploy Server +
      </a>
    </div>
  {/if}
</div>

<!-- BOTTOM PROMOTIONAL CARD -->
<div class="console-promo-banner">
  <div>
    <span class="promo-badge">HOT PRODUCT // NANO CLOUD</span>
    <h4 style="margin:0 0 6px 0; font-size:16px; font-weight:700; color:var(--console-text-heading);">
      High-Speed NVMe Web Hosting with 5 Business Mailboxes
    </h4>
    <p style="margin:0; font-size:13px; color:var(--console-text-muted); max-width:650px; line-height:1.5;">
      Start your web presence for only ₦1,999/mo ($1.40/mo). Includes Roundcube Webmail, Free AutoSSL, and cPanel/CloudPanel instant auto-installer.
    </p>
  </div>
  <a href="{$WEB_ROOT}/cart.php?a=add&pid=16" class="btn-create-instance" style="white-space:nowrap; flex-shrink:0;">
    Deploy Nano Cloud →
  </a>
</div>
