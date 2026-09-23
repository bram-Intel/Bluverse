<div class="card mb-4 border-0 shadow-sm rounded-3">
    <div class="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
        <h5 class="mb-0 font-weight-bold text-dark">
            <i class="fas fa-server text-primary mr-2"></i> Cloud Instance Management
        </h5>
        <span class="badge badge-success px-3 py-2">{$serverStatus}</span>
    </div>
    <div class="card-body p-4">
        <div class="row align-items-center mb-4">
            <div class="col-md-6 mb-3 mb-md-0">
                <span class="text-muted d-block small text-uppercase font-weight-bold">Primary Dedicated IPv4</span>
                <span class="h4 font-weight-bold text-primary font-monospace">{if $ipAddress}{$ipAddress}{else}Assigning network...{/if}</span>
            </div>
            <div class="col-md-6">
                <span class="text-muted d-block small text-uppercase font-weight-bold">Contabo Cloud ID</span>
                <span class="font-monospace text-dark font-weight-bold">#{$instanceId}</span>
            </div>
        </div>

        <hr class="my-3">

        <div class="d-flex flex-wrap gap-2 mt-3">
            <form method="post" action="clientarea.php?action=productdetails&id={$serviceid}&modop=custom&a=start" class="d-inline mr-2">
                <button type="submit" class="btn btn-outline-success btn-sm px-3">
                    <i class="fas fa-play mr-1"></i> Start
                </button>
            </form>
            <form method="post" action="clientarea.php?action=productdetails&id={$serviceid}&modop=custom&a=reboot" class="d-inline mr-2">
                <button type="submit" class="btn btn-outline-primary btn-sm px-3">
                    <i class="fas fa-sync mr-1"></i> Reboot
                </button>
            </form>
            <form method="post" action="clientarea.php?action=productdetails&id={$serviceid}&modop=custom&a=stop" class="d-inline">
                <button type="submit" class="btn btn-outline-danger btn-sm px-3" onclick="return confirm('Are you sure you want to stop this server?');">
                    <i class="fas fa-stop mr-1"></i> Power Off
                </button>
            </form>
        </div>
    </div>
</div>
