document.addEventListener('DOMContentLoaded', function () {
  var c = websiteContent;

  // ── Nav links ────────────────────────────────────────
  document.getElementById('nav-cta').href          = c.boekingslink;

  // ── Hero ─────────────────────────────────────────────
  document.getElementById('hero-titel').textContent    = c.heroTitel;
  document.getElementById('hero-subtitel').textContent = c.heroSubtitel;
  document.getElementById('hero-cta-1').href           = c.boekingslink;

  // ── Voordelen ────────────────────────────────────────
  var grid = document.getElementById('voordelen-grid');
  c.voordelen.forEach(function (v) {
    var el = document.createElement('div');
    el.className = 'voordeel-item';
    el.innerHTML =
      '<span class="voordeel-icoon">' + v.icoon + '</span>' +
      '<h3>' + v.titel + '</h3>' +
      '<p>'  + v.tekst  + '</p>';
    grid.appendChild(el);
  });

  // ── Over ons ─────────────────────────────────────────
  document.getElementById('over-ons-tekst').textContent = c.overOns;
  document.getElementById('over-ons-cta').href          = c.boekingslink;

  // ── Tarieven (tabs) ──────────────────────────────────
  var actieveTab = 'Heren';

  function renderTarieven(tab) {
    var tbody = document.getElementById('tarieven-body');
    tbody.innerHTML = '';
    c.diensten
      .filter(function (d) { return d.categorie === tab; })
      .forEach(function (d) {
        var tr = document.createElement('tr');
        tr.innerHTML =
          '<td>' + d.naam + '</td>' +
          '<td class="prijs">' + d.prijs + '</td>';
        tbody.appendChild(tr);
      });
  }

  renderTarieven(actieveTab);

  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('actief'); });
      btn.classList.add('actief');
      renderTarieven(btn.dataset.tab);
    });
  });

  document.getElementById('tarieven-boek-link').href = c.boekingslink;

  // ── Reviews ──────────────────────────────────────────
  var reviewsGrid = document.getElementById('reviews-grid');

  c.reviews.forEach(function (r) {
    var sterren = '';
    for (var i = 0; i < r.sterren; i++) { sterren += '★'; }

    var badgeHtml = r.badge
      ? '<span class="review-badge">' + r.badge + '</span>'
      : '';

    var card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML =
      '<div class="review-top">' +
        '<div class="review-avatar">' + r.naam.charAt(0) + '</div>' +
        '<div class="review-meta">' +
          '<span class="review-naam">' + r.naam + '</span>' +
          badgeHtml +
        '</div>' +
      '</div>' +
      '<div class="review-sterren">' + sterren + '</div>' +
      '<p class="review-tekst">' + r.tekst + '</p>' +
      '<div class="review-datum">' +
        '<span class="google-badge">' +
          '<span class="google-g">G</span> Google Review &mdash; ' + r.datum +
        '</span>' +
      '</div>';
    reviewsGrid.appendChild(card);
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

  document.getElementById('contact-cta').href = c.boekingslink;
  document.getElementById('contact-ig').href  = c.instagram;

  // ── Openingstijden ───────────────────────────────────
  var lijst = document.getElementById('openingstijden-lijst');
  c.openingstijden.forEach(function (o) {
    var li = document.createElement('li');
    if (o.tijd === 'Gesloten') li.classList.add('dag-gesloten');

    var labelHtml = o.label
      ? '<span class="dag-label">' + o.label + '</span>'
      : '';

    li.innerHTML =
      '<span class="dag-naam">' + o.dag + '</span>' +
      '<span class="dag-tijd">' + o.tijd + '</span>' +
      labelHtml;
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

});
