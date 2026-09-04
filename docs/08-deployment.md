# 08 — Deployment & Operations Guide

## 1. Single-VPS Management Architecture (Launch Footprint)

```
                       [Internet]
                           │
                           ▼
                    [Cloudflare Proxy]
             (Full Strict SSL, DDoS Scrubbing)
                           │
                           ▼ (Port 443)
                 [Bulverse Management VPS]
         ┌─────────────────┴─────────────────┐
         │ Nginx (Reverse Proxy & SSL Term)  │
         └─────────┬───────────────┬─────────┘
                   │               │
     (FastCGI / Port 9000)   (Proxy / Port 3000)
                   ▼               ▼
           [PHP 8.2-FPM]    [Node.js / API]
         (WHMCS 9 + ionCube)
                   │
                   ▼
              [MySQL 8.0]
           (Local Unix Socket)
```

---

## 2. Server Provisioning Checklist
* **Base OS**: Ubuntu 22.04 LTS x86_64.
* **PHP Configuration**:
  * PHP 8.2 / 8.3 with extensions: `curl`, `gd`, `intl`, `mbstring`, `openssl`, `pdo_mysql`, `soap`, `xml`, `zip`.
  * **ionCube Loader**: Version 13.0+ loaded via `/etc/php/8.2/fpm/conf.d/00-ioncube.ini`.
  * `memory_limit = 512M`, `max_execution_time = 300`, `upload_max_filesize = 64M`.
* **System Cron**:
  * WHMCS Automation Cron scheduled every 5 minutes:
    ```bash
    */5 * * * * php -q /var/www/portal.bulverse.com/crons/cron.php
    ```

---

## 3. Automated Off-Site Backups
Never store backups exclusively on the management VPS:
* **Nightly Database Dump**: Encrypted MySQL dump (`mysqldump --single-transaction`) pushed to an external S3 bucket.
* **Weekly Filesystem Snapshot**: Configuration, attachments, and child themes backed up off-site.
* **Retention Policy**: 7 daily snapshots, 4 weekly snapshots.
