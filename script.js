document.addEventListener('DOMContentLoaded', function () {
  var c = websiteContent;

  // ── Nav ──────────────────────────────────────────────
  document.getElementById('nav-cta').href = c.boekingslink;

  // ── Hero ─────────────────────────────────────────────
  document.getElementById('hero-titel').textContent    = c.heroTitel;
  document.getElementById('hero-subtitel').textContent = c.heroSubtitel;
  document.getElementById('hero-cta').href             = c.boekingslink;

  // ── Voordelen ────────────────────────────────────────
  var vg = document.getElementById('voordelen-grid');
  c.voordelen.forEach(function (v, i) {
    var d = document.createElement('div');
    d.className = 'voordeel-item fade-in' + (i > 0 ? ' fd' + i : '');
    d.innerHTML = '<span class="voordeel-icoon">' + v.icoon + '</span><h3>' + v.titel + '</h3><p>' + v.tekst + '</p>';
    vg.appendChild(d);
  });

  // ── Over ons ─────────────────────────────────────────
  document.getElementById('over-ons-tekst').textContent = c.overOns;
  document.getElementById('over-ons-cta').href          = c.boekingslink;

  // ── Tarieven ─────────────────────────────────────────
  var tb = document.getElementById('tarieven-body');
  c.diensten.forEach(function (d) {
    var tr = document.createElement('tr');
    if (d.highlight) tr.className = 'vip-row';
    var badge = d.highlight ? '<span class="vip-badge">Meest gekozen</span>' : '';
    tr.innerHTML = '<td>' + d.naam + badge + '</td><td class="prijs">' + d.prijs + '</td>';
    tb.appendChild(tr);
  });
  document.getElementById('tarieven-boek-link').href = c.boekingslink;

  // ── Lookbook ─────────────────────────────────────────
  var lg = document.getElementById('lookbook-grid');
  c.lookbook.forEach(function (item, i) {
    var div = document.createElement('div');
    div.className = 'lookbook-item fade-in' + (i % 4 > 0 ? ' fd' + (i % 4) : '');
    div.innerHTML =
      '<img src="' + item.bestand + '" alt="' + item.label + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
      '<div class="lookbook-placeholder" style="display:none">' +
        '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>' +
        '<span>' + item.label + '<br><small>' + item.bestand + '</small></span>' +
      '</div>' +
      '<div class="lookbook-label">' + item.label + '</div>';
    lg.appendChild(div);
  });

  // ── Reviews ──────────────────────────────────────────
  var rg = document.getElementById('reviews-grid');
  c.reviews.forEach(function (r, i) {
    var sterren = '';
    for (var j = 0; j < r.sterren; j++) { sterren += '★'; }
    var card = document.createElement('div');
    card.className = 'review-card fade-in' + (i > 0 ? ' fd' + i : '');
    card.innerHTML =
      '<div class="review-top">' +
        '<div class="review-avatar">' + r.naam.charAt(0) + '</div>' +
        '<span class="review-naam">' + r.naam + '</span>' +
      '</div>' +
      '<div class="review-sterren">' + sterren + '</div>' +
      '<p class="review-tekst">' + r.tekst + '</p>' +
      '<div class="review-datum">' +
        '<svg height="14" width="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
          '<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>' +
          '<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>' +
          '<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>' +
          '<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>' +
        '</svg>' +
        r.datum +
      '</div>';
    rg.appendChild(card);
  });
  document.getElementById('alle-reviews-link').href = c.googleReviewsLink;

  // ── Contact ──────────────────────────────────────────
  var adresLink = document.getElementById('adres-link');
  adresLink.textContent = c.adres;
  adresLink.href        = c.googleMapsLink;

  var telEl = document.getElementById('contact-tel');
  telEl.textContent = c.telefoonnummer;
  telEl.href        = 'tel:' + c.telefoonnummer.replace(/[^0-9+]/g, '');

  var emailEl = document.getElementById('contact-email');
  emailEl.textContent = c.email;
  emailEl.href        = 'mailto:' + c.email;

  document.getElementById('contact-cta').href    = c.boekingslink;
  document.getElementById('contact-ig').href     = c.instagram;
  document.getElementById('contact-tiktok').href = c.tiktok;

  // ── Openingstijden ───────────────────────────────────
  var lijst = document.getElementById('openingstijden-lijst');
  c.openingstijden.forEach(function (o) {
    var li = document.createElement('li');
    if (o.tijd === 'Gesloten') li.classList.add('dag-gesloten');
    li.innerHTML = '<span class="dag-naam">' + o.dag + '</span><span class="dag-tijd">' + o.tijd + '</span>';
    lijst.appendChild(li);
  });

  // ── Footer ───────────────────────────────────────────
  document.getElementById('footer-adres').textContent = c.adres;
  document.getElementById('footer-jaar').textContent  = new Date().getFullYear();

  // ── Sticky CTA ───────────────────────────────────────
  document.getElementById('sticky-afspraak').href = c.boekingslink;

  // ── Hamburger menu ───────────────────────────────────
  var toggle   = document.querySelector('.nav-toggle');
  var navLinks = document.getElementById('nav-links');
  toggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // ── Nav scrolled shadow ──────────────────────────────
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── Fade-in observer ─────────────────────────────────
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(function (el) { observer.observe(el); });

});
