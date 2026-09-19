{include file="orderforms/standard_cart/common.tpl"}

<div id="order-standard_cart">
    <div class="row">
        <div class="cart-sidebar sidebar">
            {include file="orderforms/standard_cart/sidebar-categories.tpl"}
        </div>
        <div class="cart-body">

            <div class="header-lined vultr-store-header">
                <h1 class="vultr-store-title">
                    {if $productGroup.headline}
                        {$productGroup.headline}
                    {else}
                        {$productGroup.name}
                    {/if}
                </h1>
                {if $productGroup.tagline}
                    <p class="vultr-store-tagline">{$productGroup.tagline}</p>
                {/if}
            </div>

            {if $errormessage}
                <div class="alert alert-danger">
                    {$errormessage}
                </div>
            {elseif !$productGroup}
                <div class="alert alert-info">
                    {lang key='orderForm.selectCategory'}
                </div>
            {/if}

            <!-- Currency Switcher if multiple currencies available -->
            {if !$loggedin && $currencies && $currencies|@count > 1}
                <div class="vultr-currency-bar">
                    <form method="post" action="{$WEB_ROOT}/cart.php{if $action}?a={$action}{if $domain}&domain={$domain}{/if}{elseif $gid}?gid={$gid}{/if}">
                        <div class="vultr-currency-select-wrap">
                            <span class="vultr-currency-label">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                <span>Billing Currency:</span>
                            </span>
                            <div class="vultr-currency-input-wrapper">
                                <select name="currency" onchange="submit()" class="vultr-currency-select">
                                    {foreach from=$currencies item=listcurr}
                                        <option value="{$listcurr.id}"{if $listcurr.id == $activeCurrency.id} selected{/if}>{$listcurr.code} ({$listcurr.prefix})</option>
                                    {/foreach}
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            {/if}

            <!-- VULTR ENTERPRISE PRODUCT GRID -->
            <div class="vultr-products-container" id="products">
                <div class="vultr-products-grid">
                    {foreach $products as $key => $product}
                        {$idPrefix = ($product.bid) ? ("bundle"|cat:$product.bid) : ("product"|cat:$product.pid)}
                        <div class="vultr-card product clearfix" id="{$idPrefix}">
                            <!-- CARD TOP -->
                            <div class="vultr-card-header">
                                <div class="vultr-card-header-top">
                                    <span class="vultr-card-badge">
                                        {if $productGroup.slug == 'cloud-vps'}NVMe Cloud Compute
                                        {elseif $productGroup.slug == 'website-hosting'}Ultra Web Cloud
                                        {elseif $productGroup.slug == 'trading-infrastructure'}Ultra-Low Latency
                                        {elseif $productGroup.slug == 'cloud-storage'}S3 Object Storage
                                        {elseif $productGroup.slug == 'cloud-networking'}Dedicated IP & Mesh
                                        {else}Enterprise Cloud{/if}
                                    </span>
                                    {if $product.stockControlEnabled}
                                        <span class="vultr-stock-badge">
                                            {$product.qty} {$LANG.orderavailable}
                                        </span>
                                    {/if}
                                </div>
                                <h3 class="vultr-card-name" id="{$idPrefix}-name">{$product.name}</h3>
                            </div>

                            <!-- PRICING HERO -->
                            <div class="vultr-card-pricing" id="{$idPrefix}-price">
                                {if $product.bid}
                                    <div class="vultr-price-bundle-label">{$LANG.bundledeal}</div>
                                    {if $product.displayprice}
                                        <div class="vultr-price-val">{$product.displayprice}</div>
                                    {/if}
                                {else}
                                    <div class="vultr-price-wrapper">
                                        <span class="vultr-price-val">{$product.pricing.minprice.price}</span>
                                        <span class="vultr-price-cycle">
                                            {if $product.pricing.minprice.cycle eq "monthly"}/mo
                                            {elseif $product.pricing.minprice.cycle eq "quarterly"}/quarter
                                            {elseif $product.pricing.minprice.cycle eq "semiannually"}/6 mo
                                            {elseif $product.pricing.minprice.cycle eq "annually"}/yr
                                            {elseif $product.pricing.minprice.cycle eq "biennially"}/2 yrs
                                            {elseif $product.pricing.minprice.cycle eq "triennially"}/3 yrs
                                            {else}/mo{/if}
                                        </span>
                                    </div>
                                    <div class="vultr-price-subtext">
                                        {if $product.pricing.hasconfigoptions}
                                            <span>Configurable Options Available</span> &bull; 
                                        {/if}
                                        {if $product.pricing.minprice.setupFee}
                                            <span>{$product.pricing.minprice.setupFee->toPrefixed()} Setup</span> &bull; 
                                        {/if}
                                        <span>Instant Auto-Deploy</span>
                                    </div>
                                {/if}
                            </div>

                            <div class="vultr-card-divider"></div>

                            <!-- SPECS LIST (Clean Bullet Rows with SVG Checkmarks) -->
                            <div class="vultr-card-specs product-desc">
                                {if $product.featuresdesc}
                                    {assign var="descClean" value=$product.featuresdesc|regex_replace:"/<br\s*[\/]?>/i":"\n"}
                                    {assign var="specList" value="\n"|explode:$descClean}
                                    <ul class="vultr-specs-list" id="{$idPrefix}-description">
                                        {foreach $specList as $spec}
                                            {assign var="cleanSpec" value=$spec|strip_tags|trim}
                                            {if $cleanSpec}
                                                <li class="vultr-spec-row">
                                                    <svg class="vultr-spec-check" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                                    </svg>
                                                    <span class="vultr-spec-text">{$cleanSpec}</span>
                                                </li>
                                            {/if}
                                        {/foreach}
                                    </ul>
                                {/if}

                                {if $product.features}
                                    <ul class="vultr-specs-list vultr-whmcs-features">
                                        {foreach $product.features as $feature => $value}
                                            <li class="vultr-spec-row" id="{$idPrefix}-feature{$value@iteration}">
                                                <svg class="vultr-spec-check" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                                </svg>
                                                <span class="vultr-spec-text">
                                                    <strong class="feature-value">{$value}</strong> {$feature}
                                                </span>
                                            </li>
                                        {/foreach}
                                    </ul>
                                {/if}
                            </div>

                            <!-- CARD FOOTER / CTA BUTTON -->
                            <footer class="vultr-card-footer">
                                <a href="{$product.productUrl}" class="btn btn-order-now vultr-deploy-btn" id="{$idPrefix}-order-button"{if $product.hasRecommendations} data-has-recommendations="1"{/if}>
                                    <span>Deploy Instance</span>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </a>
                            </footer>
                        </div>
                    {/foreach}
                </div>
            </div>

        </div>
    </div>
</div>

{include file="orderforms/standard_cart/recommendations-modal.tpl"}
