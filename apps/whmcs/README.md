# Bulverse WHMCS Customizations & Client Area

This directory contains Git-managed themes and hook overrides for **WHMCS 9.0+**.

## Deployment Instructions

### 1. Child Theme Installation
Copy `templates/bulverse` to your WHMCS server:
```bash
rsync -avz apps/whmcs/templates/bulverse/ user@your-vps:/var/www/portal.bulverse.com/templates/bulverse/
```

In the WHMCS Admin Area:
* Navigate to **Setup > General Settings > General**.
* Set **Template** to `bulverse`.
* Click **Save Changes**.

### 2. Hook Script Installation
Copy `includes/hooks/bulverse_nav.php` to:
```bash
rsync -avz apps/whmcs/includes/hooks/bulverse_nav.php user@your-vps:/var/www/portal.bulverse.com/includes/hooks/
```

### 3. Contabo Provisioning Module Setup
1. Download the official Contabo VPS module from the WHMCS Marketplace or Contabo partner portal.
2. Place the module in `/modules/servers/contabo/`.
3. In WHMCS Admin: **Setup > Products/Services > Servers**, add your Contabo Reseller API OAuth credentials.
4. When configuring products (e.g. Cloud VPS 2GB, Cloud VPS 4GB), link the Module Name to `Contabo` and select the appropriate Contabo Product ID.
