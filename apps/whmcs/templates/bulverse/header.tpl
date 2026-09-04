<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{$pagetitle} — Bulverse Infrastructure Console</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
  {$headoutput}
  <link href="{$WEB_ROOT}/templates/{$template}/css/bulverse.css" rel="stylesheet">
</head>
<body class="bulverse-portal">
  {$headeroutput}
  <header class="bulverse-navbar">
    <a href="{$WEB_ROOT}/clientarea.php" class="bulverse-brand" style="display:flex; align-items:center; gap:12px;">
      <img src="{$WEB_ROOT}/templates/{$template}/images/logo.png" alt="Bulverse Cloud" style="height:34px; width:auto;">
    </a>
    <nav style="display:flex; align-items:center; gap:20px;">
      <a href="{$WEB_ROOT}/clientarea.php?action=services" style="color:#94A3B8; text-decoration:none; font-size:14px; font-weight:500;">Compute Fleet</a>
      <a href="{$WEB_ROOT}/clientarea.php?action=invoices" style="color:#94A3B8; text-decoration:none; font-size:14px; font-weight:500;">Invoices & Billing</a>
      <a href="{$WEB_ROOT}/submitticket.php" style="color:#94A3B8; text-decoration:none; font-size:14px; font-weight:500;">24/7 Support</a>
      <a href="https://bulverse.com" style="color:#00D2FF; text-decoration:none; font-size:14px; font-weight:600;">← Main Platform</a>
    </nav>
  </header>
  <main style="max-width:1240px; margin:0 auto; padding:36px 20px;">
