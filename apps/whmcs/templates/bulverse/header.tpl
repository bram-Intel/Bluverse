<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="{$charset}">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>{$pagetitle} — Bulverse Cloud Console</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
  
  {include file="$template/includes/head.tpl"}
  {$headoutput}
  
  <link href="{$WEB_ROOT}/templates/{$template}/css/bulverse.css?v=3.2" rel="stylesheet">
</head>
<body class="bulverse-portal">
  {$headeroutput}
  
  <!-- Mobile Drawer Backdrop -->
  <div class="sidebar-backdrop" id="sidebarBackdrop" onclick="toggleConsoleSidebar()"></div>

  <div class="console-container">
    <!-- VULTR DARK SAPPHIRE SIDEBAR -->
    <aside class="console-sidebar" id="consoleSidebar">
      <div class="sidebar-header">
        <a href="{$WEB_ROOT}/clientarea.php" class="sidebar-brand">
          <img src="{$WEB_ROOT}/templates/{$template}/images/logo.png" alt="Bulverse Cloud">
          <span class="sidebar-brand-name">BULVERSE</span>
        </a>
        <button class="sidebar-close-btn" onclick="toggleConsoleSidebar()" title="Close Menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div class="sidebar-scroll">
        <!-- Dashboard -->
        <a href="{$WEB_ROOT}/clientarea.php" class="sidebar-nav-item {if $filename == 'clientarea' && (!$action || $action == '')}active{/if}">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <span>Dashboard</span>
          </div>
        </a>

        <!-- Compute Fleet -->
        <div class="sidebar-section-title">Compute Fleet</div>
        <a href="{$WEB_ROOT}/clientarea.php?action=services" class="sidebar-nav-item {if $action == 'services' || $action == 'productdetails'}active{/if}">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            <span>Instances</span>
          </div>
          {if $clientsstats.productsnumactive > 0}
            <span class="sidebar-badge">{$clientsstats.productsnumactive}</span>
          {/if}
        </a>
        <a href="{$WEB_ROOT}/index.php?rp=/store/cloud-vps" class="sidebar-nav-item {if $productGroup.slug == 'cloud-vps' || $gid == 1}active{/if}">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
            <span>Cloud VPS</span>
          </div>
        </a>
        <a href="{$WEB_ROOT}/index.php?rp=/store/website-hosting" class="sidebar-nav-item {if $productGroup.slug == 'website-hosting' || $gid == 2}active{/if}">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <span>Web Hosting</span>
          </div>
        </a>
        <a href="{$WEB_ROOT}/index.php?rp=/store/trading-infrastructure" class="sidebar-nav-item {if $productGroup.slug == 'trading-infrastructure' || $gid == 5}active{/if}">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            <span>Trading VPS</span>
          </div>
        </a>

        <!-- Storage & Vault -->
        <div class="sidebar-section-title">Storage & Vault</div>
        <a href="{$WEB_ROOT}/index.php?rp=/store/cloud-storage" class="sidebar-nav-item {if $productGroup.slug == 'cloud-storage' || $gid == 3}active{/if}">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <span>Cloud Storage</span>
          </div>
        </a>

        <!-- Networking & Security -->
        <div class="sidebar-section-title">Networking & Security</div>
        <a href="{$WEB_ROOT}/index.php?rp=/store/cloud-networking" class="sidebar-nav-item {if $productGroup.slug == 'cloud-networking' || $gid == 4}active{/if}">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M4.93 4.93l14.14 14.14"></path></svg>
            <span>Cloud Networking</span>
          </div>
        </a>
        <a href="{$WEB_ROOT}/clientarea.php?action=domains" class="sidebar-nav-item {if $action == 'domains'}active{/if}">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            <span>Domains & IPs</span>
          </div>
        </a>

        <!-- Custom Cloud -->
        <div class="sidebar-section-title">Custom Infrastructure</div>
        <a href="{$WEB_ROOT}/index.php?rp=/store/custom-infrastructure" class="sidebar-nav-item {if $productGroup.slug == 'custom-infrastructure' || $gid == 6}active{/if}">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
            <span>Bespoke Bare-Metal</span>
          </div>
        </a>

        <!-- Billing & Plans -->
        <div class="sidebar-section-title">Billing & Account</div>
        <a href="{$WEB_ROOT}/clientarea.php?action=invoices" class="sidebar-nav-item {if $action == 'invoices'}active{/if}">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            <span>Invoices & Plans</span>
          </div>
          {if $clientsstats.numunpaidinvoices > 0}
            <span class="sidebar-badge" style="background:#EF4444;">{$clientsstats.numunpaidinvoices}</span>
          {/if}
        </a>
        <a href="{$WEB_ROOT}/account/paymentmethods" class="sidebar-nav-item">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            <span>Payment Methods</span>
          </div>
        </a>

        <!-- Support -->
        <div class="sidebar-section-title">Help & Operations</div>
        <a href="{$WEB_ROOT}/supporttickets.php" class="sidebar-nav-item {if $filename == 'supporttickets'}active{/if}">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span>Support Desk</span>
          </div>
          {if $clientsstats.numactivetickets > 0}
            <span class="sidebar-badge">{$clientsstats.numactivetickets}</span>
          {/if}
        </a>
        <a href="{$WEB_ROOT}/submitticket.php" class="sidebar-nav-item {if $filename == 'submitticket'}active{/if}">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span>Open Ticket</span>
          </div>
        </a>
        <a href="{$WEB_ROOT}/serverstatus.php" class="sidebar-nav-item">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            <span>Network Health</span>
          </div>
        </a>
        <a href="https://bulverse.cloud" target="_blank" class="sidebar-nav-item">
          <div class="sidebar-nav-item-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            <span>Documentation</span>
          </div>
        </a>
      </div>

      <!-- Quick Deploy Fixed Bottom -->
      <div class="sidebar-footer">
        <a href="{$WEB_ROOT}/cart.php" class="btn-quick-deploy">
          <span style="display:flex; align-items:center; gap:8px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Quick Deploy
          </span>
          <span class="kbd-shortcut">Ctrl E</span>
        </a>
      </div>
    </aside>

    <!-- MAIN VIEWPORT -->
    <div class="console-viewport">
      <!-- TOP APPLICATION BAR -->
      <header class="console-topbar">
        <div class="topbar-left">
          <button class="mobile-toggle" onclick="toggleConsoleSidebar()" aria-label="Open Sidebar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <div class="console-breadcrumbs">
            <span>Compute</span>
            <span class="separator">/</span>
            <span class="current">{$pagetitle|default:'Instances'}</span>
          </div>
        </div>

        <div class="topbar-right">
          <a href="https://bulverse.cloud" target="_blank" class="topbar-link">
            <span>Documentation</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          <a href="https://bulverse.cloud" target="_blank" class="topbar-link">
            <span>API</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          
          <div class="topbar-divider"></div>

          {if $loggedin}
            <!-- Organization Selector (Vultr style) -->
            <a href="{$WEB_ROOT}/clientarea.php?action=details" class="org-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v14M21 7v14M6 11h2M6 15h2M10 11h2M10 15h2M14 11h2M14 15h2M18 11h2M18 15h2M9 3h6v4H9z"></path></svg>
              <span>{$clientsdetails.email|truncate:20:'...'} Personal Org</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </a>

            <!-- User Profile Button -->
            <a href="{$WEB_ROOT}/clientarea.php?action=details" class="user-profile-btn" title="{$clientsdetails.firstname} {$clientsdetails.lastname}">
              <div class="user-avatar-circle">
                {$clientsdetails.firstname|substr:0:1}{$clientsdetails.lastname|substr:0:1}
              </div>
              <span>{$clientsdetails.firstname}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </a>

            <!-- Logout -->
            <a href="{$WEB_ROOT}/logout.php" class="topbar-link" title="Sign Out" style="color:#EF4444;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            </a>
          {else}
            <a href="{$WEB_ROOT}/login.php" class="topbar-link">Log In</a>
            <a href="{$WEB_ROOT}/register.php" class="btn-create-instance" style="height:36px; padding:0 14px; font-size:12.5px;">Sign Up</a>
          {/if}
        </div>
      </header>

      <!-- MAIN CONTENT VIEWPORT -->
      <main class="console-main" id="main-body">

        <!-- VULTR HORIZONTAL CATEGORY SELECTOR (Clean Cloud Plan Tabs) -->
        {if $productGroup || $products || $filename == 'cart' || $templatefile == 'products'}
          <div class="vultr-plan-categories-bar">
            <a href="{$WEB_ROOT}/index.php?rp=/store/cloud-vps" class="vultr-cat-tab {if $productGroup.slug == 'cloud-vps' || $gid == 1 || (!$gid && !$productGroup && $pid != 16)}active{/if}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
              <span>Cloud VPS</span>
            </a>
            <a href="{$WEB_ROOT}/index.php?rp=/store/website-hosting" class="vultr-cat-tab {if $productGroup.slug == 'website-hosting' || $gid == 2 || $pid == 16}active{/if}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span>Web Hosting</span>
            </a>
            <a href="{$WEB_ROOT}/index.php?rp=/store/trading-infrastructure" class="vultr-cat-tab {if $productGroup.slug == 'trading-infrastructure' || $gid == 5}active{/if}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              <span>Trading VPS</span>
            </a>
            <a href="{$WEB_ROOT}/index.php?rp=/store/cloud-storage" class="vultr-cat-tab {if $productGroup.slug == 'cloud-storage' || $gid == 3}active{/if}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <span>Cloud Storage</span>
            </a>
            <a href="{$WEB_ROOT}/index.php?rp=/store/cloud-networking" class="vultr-cat-tab {if $productGroup.slug == 'cloud-networking' || $gid == 4}active{/if}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M4.93 4.93l14.14 14.14"></path></svg>
              <span>Cloud Networking</span>
            </a>
            <a href="{$WEB_ROOT}/index.php?rp=/store/custom-infrastructure" class="vultr-cat-tab {if $productGroup.slug == 'custom-infrastructure' || $gid == 6}active{/if}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
              <span>Custom Cloud</span>
            </a>
          </div>
        {/if}
