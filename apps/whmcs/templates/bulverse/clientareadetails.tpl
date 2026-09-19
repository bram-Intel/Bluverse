{if $successful}
    {include file="$template/includes/alert.tpl" type="success" msg="{lang key='changessavedsuccessfully'}" textcenter=true}
{/if}

{if $errormessage}
    {include file="$template/includes/alert.tpl" type="error" errorshtml=$errormessage}
{/if}

{if in_array('state', $optionalFields)}
    <script>
        var stateNotRequired = true;
    </script>
{/if}

<script type="text/javascript" src="{$BASE_PATH_JS}/StatesDropdown.js"></script>

<form method="post" action="?action=details" role="form" class="vultr-details-form">

    <div class="card vultr-card-panel mb-4">
        <div class="card-body">
            <h3 class="card-title vultr-panel-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                {lang key='clientareanavdetails'}
            </h3>

            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="form-group">
                        <label for="inputFirstName" class="col-form-label">{lang key='clientareafirstname'}</label>
                        <input type="text" name="firstname" id="inputFirstName" value="{$clientfirstname}"{if in_array('firstname', $uneditablefields)} disabled="disabled"{/if} class="form-control" />
                    </div>

                    <div class="form-group">
                        <label for="inputLastName" class="col-form-label">{lang key='clientarealastname'}</label>
                        <input type="text" name="lastname" id="inputLastName" value="{$clientlastname}"{if in_array('lastname', $uneditablefields)} disabled="disabled"{/if} class="form-control" />
                    </div>

                    <div class="form-group">
                        <label for="inputCompanyName" class="col-form-label">{lang key='clientareacompanyname'}</label>
                        <input type="text" name="companyname" id="inputCompanyName" value="{$clientcompanyname}"{if in_array('companyname', $uneditablefields)} disabled="disabled"{/if} class="form-control" />
                    </div>

                    <div class="form-group">
                        <label for="inputEmail" class="col-form-label">{lang key='clientareaemail'}</label>
                        <input type="email" name="email" id="inputEmail" value="{$clientemail}"{if in_array('email', $uneditablefields)} disabled="disabled"{/if} class="form-control" />
                    </div>

                    <div class="form-group">
                        <label for="inputPhone" class="col-form-label">{lang key='clientareaphonenumber'}</label>
                        <input type="tel" name="phonenumber" id="inputPhone" value="{$clientphonenumber}"{if in_array('phonenumber',$uneditablefields)} disabled=""{/if} class="form-control" />
                    </div>
                </div>

                <div class="col-md-6 col-12">
                    <div class="form-group">
                        <label for="inputAddress1" class="col-form-label">{lang key='clientareaaddress1'}</label>
                        <input type="text" name="address1" id="inputAddress1" value="{$clientaddress1}"{if in_array('address1', $uneditablefields)} disabled="disabled"{/if} class="form-control" />
                    </div>

                    <div class="form-group">
                        <label for="inputAddress2" class="col-form-label">{lang key='clientareaaddress2'}</label>
                        <input type="text" name="address2" id="inputAddress2" value="{$clientaddress2}"{if in_array('address2', $uneditablefields)} disabled="disabled"{/if} class="form-control" />
                    </div>

                    <div class="row">
                        <div class="col-sm-6 col-12">
                            <div class="form-group">
                                <label for="inputCity" class="col-form-label">{lang key='clientareacity'}</label>
                                <input type="text" name="city" id="inputCity" value="{$clientcity}"{if in_array('city', $uneditablefields)} disabled="disabled"{/if} class="form-control" />
                            </div>
                        </div>
                        <div class="col-sm-6 col-12">
                            <div class="form-group">
                                <label for="inputState" class="col-form-label">{lang key='clientareastate'}</label>
                                <input type="text" name="state" id="inputState" value="{$clientstate}"{if in_array('state', $uneditablefields)} disabled="disabled"{/if} class="form-control" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6 col-12">
                            <div class="form-group">
                                <label for="inputPostcode" class="col-form-label">{lang key='clientareapostcode'}</label>
                                <input type="text" name="postcode" id="inputPostcode" value="{$clientpostcode}"{if in_array('postcode', $uneditablefields)} disabled="disabled"{/if} class="form-control" />
                            </div>
                        </div>
                        <div class="col-sm-6 col-12">
                            <div class="form-group">
                                <label class="col-form-label" for="country">{lang key='clientareacountry'}</label>
                                {$clientcountriesdropdown}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="vultr-divider my-3"></div>

            <div class="row">
                <div class="col-md-4 col-12">
                    <div class="form-group">
                        <label for="inputPaymentMethod" class="col-form-label">{lang key='paymentmethod'}</label>
                        <select name="paymentmethod" id="inputPaymentMethod" class="form-control custom-select">
                            <option value="none">{lang key='paymentmethoddefault'}</option>
                            {foreach $paymentmethods as $method}
                            <option value="{$method.sysname}"{if $method.sysname eq $defaultpaymentmethod} selected="selected"{/if}>{$method.name}</option>
                            {/foreach}
                        </select>
                    </div>
                </div>

                <div class="col-md-4 col-12">
                    <div class="form-group">
                        <label for="inputBillingContact" class="col-form-label">{lang key='defaultbillingcontact'}</label>
                        <select name="billingcid" id="inputBillingContact" class="form-control custom-select">
                            <option value="0">{lang key='usedefaultcontact'}</option>
                            {foreach $contacts as $contact}
                            <option value="{$contact.id}"{if $contact.id eq $billingcid} selected="selected"{/if}>{$contact.name}</option>
                            {/foreach}
                        </select>
                    </div>
                </div>

                <div class="col-md-4 col-12">
                    <div class="form-group">
                        <label for="inputLanguage" class="col-form-label">{lang key='clientarealanguage'}</label>
                        <select name="accountLanguage" id="inputAccountLanguage" class="form-control custom-select"
                            {if in_array('language', $uneditablefields)} disabled="disabled"{/if}>
                            <option value="">{lang key='default'}</option>
                            {foreach $languages as $language}
                                <option value="{$language}"{if $language eq $clientLanguage} selected="selected"{/if}
                                    >{$language|ucfirst}</option>
                            {/foreach}
                        </select>
                    </div>
                </div>

                {if $showTaxIdField}
                    <div class="col-md-4 col-12">
                        <div class="form-group">
                            <label for="inputTaxId" class="col-form-label">{lang key=$taxIdLabel}</label>
                            <input type="text" name="tax_id" id="inputTaxId" class="form-control" value="{$clientTaxId}"{if in_array('tax_id', $uneditablefields)} disabled="disabled"{/if} />
                        </div>
                    </div>
                {/if}

                {if $customfields}
                    {foreach $customfields as $customfield}
                        <div class="col-md-4 col-12">
                            <div class="form-group">
                                <label class="col-form-label" for="customfield{$customfield.id}">{$customfield.name}</label>
                                <div class="control">
                                    {$customfield.input} {$customfield.description}
                                </div>
                            </div>
                        </div>
                    {/foreach}
                {/if}
            </div>
        </div>
    </div>

    {if !empty($accountDetailsExtraFields)}
        <div class="card vultr-card-panel mb-4">
            <div class="card-body">
                <h3 class="card-title vultr-panel-title">{lang key='orderForm.additionalInformation'}</h3>

                <div class="row">
                    {foreach $accountDetailsExtraFields as $field}
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="col-form-label" for="{$field.name}">{$field.label|escape}{if $field.required} <span class="text-danger">*</span>{/if}</label>
                                <div class="control">
                                    {$field.input}
                                </div>
                            </div>
                        </div>
                    {/foreach}
                </div>
            </div>
        </div>
    {/if}

    {if $emailPreferencesEnabled}
        <div class="card vultr-card-panel mb-4">
            <div class="card-body">
                <h3 class="card-title vultr-panel-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    {lang key='clientareacontactsemails'}
                </h3>
                <p class="vultr-panel-desc">Manage specific email alerts dispatched to your account.</p>

                <div class="vultr-email-preferences-grid">
                    {foreach $emailPreferences as $emailType => $value}
                        <label class="vultr-pref-item" for="{$emailType}Emails">
                            <input type="hidden" name="email_preferences[{$emailType}]" value="0">
                            <input type="checkbox" class="form-check-input vultr-checkbox" name="email_preferences[{$emailType}]" id="{$emailType}Emails" value="1"{if $value} checked="checked"{/if} />
                            <span class="vultr-pref-label">{lang key="emailPreferences."|cat:$emailType}</span>
                        </label>
                    {/foreach}
                </div>
            </div>
        </div>
    {/if}

    {if $showMarketingEmailOptIn}
        <div class="card vultr-card-panel vultr-newsletter-panel mb-4">
            <div class="card-body vultr-newsletter-body">
                <div class="vultr-newsletter-content">
                    <div class="vultr-newsletter-header">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" stroke-width="2"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                        <h3 class="card-title vultr-panel-title m-0">{lang key='emailMarketing.joinOurMailingList'}</h3>
                    </div>
                    <p class="vultr-panel-desc mb-0">{$marketingEmailOptInMessage}</p>
                </div>
                <div class="vultr-newsletter-switch-wrap">
                    <input type="checkbox" name="marketingoptin" value="1"{if $marketingEmailOptIn} checked{/if} class="no-icheck toggle-switch-success form-check-input" data-size="small" data-on-text="{lang key='yes'}" data-off-text="{lang key='no'}">
                </div>
            </div>
        </div>
    {/if}

    <div class="form-group vultr-form-actions text-right mt-4">
        <input class="btn btn-default mr-2" type="reset" value="{lang key='cancel'}" />
        <input class="btn btn-primary vultr-btn-save" type="submit" name="save" value="{lang key='clientareasavechanges'}" />
    </div>

</form>
