  <!-- Footer -->
  <footer class="footer">
    <div class="footer-glow"></div>
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="/" class="nav-logo footer-logo">
            <span class="logo-mark">G</span>
            <span class="logo-text">rowth<span class="logo-accent">Flux</span></span>
          </a>
          <p class="footer-tagline">Performance Marketing<br />That Delivers.</p>
          <div class="footer-socials">
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter/X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-links-group">
          <h4 class="footer-heading">Services</h4>
          <ul>
            <li><a href="/services.php#paid-media">Paid Media</a></li>
            <li><a href="/services.php#seo">SEO &amp; Content</a></li>
            <li><a href="/services.php#analytics">Analytics &amp; Data</a></li>
            <li><a href="/services.php#cro">Conversion Optimisation</a></li>
            <li><a href="/services.php#social">Social Media</a></li>
            <li><a href="/services.php#email">Email Marketing</a></li>
          </ul>
        </div>

        <div class="footer-links-group">
          <h4 class="footer-heading">Company</h4>
          <ul>
            <li><a href="/about.php">About Us</a></li>
            <li><a href="/about.php#team">Our Team</a></li>
            <li><a href="/about.php#values">Our Values</a></li>
            <li><a href="/contact.php">Contact</a></li>
          </ul>
        </div>

        <div class="footer-links-group">
          <h4 class="footer-heading">Contact</h4>
          <ul class="footer-contact-list">
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:<?= SITE_EMAIL ?>"><?= SITE_EMAIL ?></a>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l.91-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>
              <a href="tel:<?= str_replace(' ', '', SITE_PHONE) ?>"><?= SITE_PHONE ?></a>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>London, UK</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; <?= date('Y') ?> <?= SITE_NAME ?>. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        <p class="footer-domain">growthflux.co.uk</p>
      </div>
    </div>
  </footer>

  <script src="/assets/js/main.js"></script>
</body>
</html>
