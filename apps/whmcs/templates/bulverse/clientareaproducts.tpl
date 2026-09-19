{include file="$template/includes/tablelist.tpl" tableName="ServicesList" filterColumn="4" noSortColumns="0"}

<script>
    jQuery(document).ready(function() {
        var table = jQuery('#tableServicesList').show().DataTable();

        {if $orderby == 'product'}
            table.order([1, '{$sort}'], [4, 'asc']);
        {elseif $orderby == 'amount' || $orderby == 'billingcycle'}
            table.order(2, '{$sort}');
        {elseif $orderby == 'nextduedate'}
            table.order(3, '{$sort}');
        {elseif $orderby == 'domainstatus'}
            table.order(4, '{$sort}');
        {/if}
        table.draw();
        jQuery('#tableLoading').hide();
    });
</script>

<!-- INSTANCES / SERVICES CONSOLE HEADER -->
<div class="console-page-header">
  <div>
    <h1 class="console-page-title">Instances & Fleet Services</h1>
    <p class="console-page-desc">Active cloud compute, storage, and networking instances attached to your organization.</p>
  </div>
  <div class="header-actions">
    <a href="{$WEB_ROOT}/cart.php" class="btn-create-instance">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      Deploy Instance +
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

<div class="console-card mt-3">
    <!-- MOBILE HORIZONTAL SCROLL HINT (Only visible on small touchscreens) -->
    <div class="vultr-table-scroll-hint">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        <span>Scroll / swipe horizontally to view all columns</span>
    </div>

    <div class="table-container table-responsive-wrapper clearfix">
        <table id="tableServicesList" class="table table-list instances-table w-hidden">
            <thead>
                <tr>
                    <th style="width: 44px; text-align: center;"></th>
                    <th>{lang key='orderproduct'}</th>
                    <th>{lang key='clientareaaddonpricing'}</th>
                    <th>{lang key='clientareahostingnextduedate'}</th>
                    <th>{lang key='clientareastatus'}</th>
                    <th style="text-align: right; width: 100px;">Action</th>
                </tr>
            </thead>
            <tbody>
                {foreach $services as $service}
                    <tr onclick="clickableSafeRedirect(event, 'clientarea.php?action=productdetails&amp;id={$service.id}', false)">
                        <td class="py-0 text-center{if $service.sslStatus} ssl-info{/if}" data-element-id="{$service.id}" data-type="service"{if $service.domain} data-domain="{$service.domain}"{/if}>
                            {if $service.sslStatus}
                                <img src="{$service.sslStatus->getImagePath()}" data-toggle="tooltip" title="{$service.sslStatus->getTooltipContent()}" class="{$service.sslStatus->getClass()}" width="22">
                            {elseif !$service.isActive}
                                <img src="{$BASE_PATH_IMG}/ssl/ssl-inactive-domain.png" data-toggle="tooltip" title="{lang key='sslState.sslInactiveService'}" width="22">
                            {else}
                                <span class="instance-server-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0066FF" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                                </span>
                            {/if}
                        </td>
                        <td>
                            <div class="instance-title-cell">
                                <span class="instance-primary-name">{$service.product}</span>
                                {if $service.domain}
                                    <a href="http://{$service.domain}" target="_blank" class="instance-domain-link" onclick="event.stopPropagation();">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                        {$service.domain}
                                    </a>
                                {/if}
                            </div>
                        </td>
                        <td class="text-left" data-order="{$service.amountnum}">
                            <div class="instance-price-cell">
                                <span class="instance-price-val">{$service.amount}</span>
                                <span class="instance-price-cycle">/{$service.billingcycle|lower}</span>
                            </div>
                        </td>
                        <td class="text-left">
                            <span class="w-hidden">{$service.normalisedNextDueDate}</span>
                            <span class="instance-due-date">{$service.nextduedate}</span>
                        </td>
                        <td class="text-left">
                            {if $service.status == 'Active'}
                                <span class="status-pill status-active">
                                    <span class="status-dot"></span>
                                    Active
                                </span>
                            {elseif $service.status == 'Pending'}
                                <span class="status-pill status-pending">
                                    <span class="status-dot"></span>
                                    Pending
                                </span>
                            {elseif $service.status == 'Suspended'}
                                <span class="status-pill status-suspended">
                                    <span class="status-dot"></span>
                                    Suspended
                                </span>
                            {else}
                                <span class="status-pill">
                                    {$service.statustext}
                                </span>
                            {/if}
                        </td>
                        <td class="text-right" style="white-space: nowrap;">
                            <a href="clientarea.php?action=productdetails&amp;id={$service.id}" class="btn-instance-manage" onclick="event.stopPropagation();">
                                Manage &rarr;
                            </a>
                        </td>
                    </tr>
                {/foreach}
            </tbody>
        </table>
        <div class="text-center py-4" id="tableLoading">
            <p><i class="fas fa-spinner fa-spin text-primary"></i> {lang key='loading'}</p>
        </div>
    </div>
</div>
