<?php
require_once __DIR__ . '/config.php';
$current_page = basename($_SERVER['PHP_SELF'], '.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="<?= isset($page_description) ? htmlspecialchars($page_description) : 'GrowthFlux — Elite Performance Marketing Agency in London. We drive measurable growth through data-driven paid media, SEO, and conversion optimisation.' ?>" />
  <meta name="keywords" content="performance marketing agency london, paid media agency, PPC agency, growth marketing, digital marketing uk" />
  <meta property="og:title" content="<?= isset($page_title) ? htmlspecialchars($page_title) . ' | GrowthFlux' : 'GrowthFlux — Performance Marketing Agency' ?>" />
  <meta property="og:description" content="Elite performance marketing. Real results." />
  <meta property="og:url" content="<?= SITE_URL ?>" />
  <meta property="og:type" content="website" />
  <title><?= isset($page_title) ? htmlspecialchars($page_title) . ' | GrowthFlux' : 'GrowthFlux — Performance Marketing Agency London' ?></title>
  <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/css/style.css" />
</head>
<body class="page-<?= $current_page ?>">

  <!-- Cursor -->
  <div class="cursor" id="cursor"></div>
  <div class="cursor-follower" id="cursor-follower"></div>

  <!-- Noise overlay -->
  <div class="noise-overlay"></div>

  <!-- Navigation -->
  <nav class="nav" id="mainNav">
    <div class="nav-container">
      <a href="/" class="nav-logo">
        <span class="logo-mark">G</span>
        <span class="logo-text">rowth<span class="logo-accent">Flux</span></span>
      </a>

      <ul class="nav-links">
        <li><a href="/" class="nav-link <?= $current_page === 'index' ? 'active' : '' ?>">Home</a></li>
        <li><a href="/about.php" class="nav-link <?= $current_page === 'about' ? 'active' : '' ?>">About</a></li>
        <li><a href="/services.php" class="nav-link <?= $current_page === 'services' ? 'active' : '' ?>">Services</a></li>
        <li><a href="/contact.php" class="nav-link <?= $current_page === 'contact' ? 'active' : '' ?>">Contact</a></li>
      </ul>

      <a href="/contact.php" class="btn btn-gold nav-cta">Get Started</a>

      <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="nav-mobile" id="navMobile">
      <ul class="nav-mobile-links">
        <li><a href="/" class="nav-link <?= $current_page === 'index' ? 'active' : '' ?>">Home</a></li>
        <li><a href="/about.php" class="nav-link <?= $current_page === 'about' ? 'active' : '' ?>">About</a></li>
        <li><a href="/services.php" class="nav-link <?= $current_page === 'services' ? 'active' : '' ?>">Services</a></li>
        <li><a href="/contact.php" class="nav-link <?= $current_page === 'contact' ? 'active' : '' ?>">Contact</a></li>
      </ul>
      <a href="/contact.php" class="btn btn-gold">Get Started</a>
    </div>
  </nav>
