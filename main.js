document.addEventListener('DOMContentLoaded', function () {
  const c = websiteContent;

  // --- NAV ---
  document.getElementById('nav-cta-link').href = c.boekingslink;

  // --- HERO ---
  document.getElementById('hero-titel').textContent = c.heroTitel;
  document.getElementById('hero-subtitel').textContent = c.heroSubtitel;
  const heroCta = document.getElementById('hero-cta');
  heroCta.textContent = c.ctaKnopTekst;
  heroCta.href = c.ctaKnopLink;

  // --- VOORDELEN ---
  const grid = document.getElementById('voordelen-grid');
  c.voordelen.forEach(function (v) {
    const div = document.createElement('div');
    div.className = 'voordeel-item';
    div.innerHTML =
      '<span class="voordeel-icoon">' + v.icoon + '</span>' +
      '<h3>' + v.titel + '</h3>' +
      '<p>' + v.tekst + '</p>';
    grid.appendChild(div);
  });

  // --- TARIEVEN (met tabs) ---
  var actieveTab = 'Heren';

  function renderTarieven(tab) {
    const tbody = document.getElementById('tarieven-body');
    tbody.innerHTML = '';
    c.diensten
      .filter(function (d) { return d.categorie === tab; })
      .forEach(function (d) {
        const tr = document.createElement('tr');
        tr.innerHTML =
          '<td>' + d.naam + '</td>' +
          '<td>' + d.prijs + '</td>';
        tbody.appendChild(tr);
      });
  }

  renderTarieven(actieveTab);

  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.tab-btn').forEach(function (b) {
        b.classList.remove('actief');
      });
      btn.classList.add('actief');
      actieveTab = btn.dataset.tab;
      renderTarieven(actieveTab);
    });
  });

  document.getElementById('tarieven-cta-link').href = c.boekingslink;

  // --- OVER ONS ---
  document.getElementById('over-ons-tekst').textContent = c.overOns;
  document.getElementById('over-ons-cta').href = c.boekingslink;

  // --- CONTACT ---
  document.getElementById('contact-adres').textContent = c.adres;
  const telLink = document.getElementById('contact-tel');
  telLink.textContent = c.telefoonnummer;
  telLink.href = 'tel:' + c.telefoonnummer.replace(/[^0-9+]/g, '');
  document.getElementById('contact-cta').href = c.boekingslink;
  document.getElementById('instagram-link').href = c.instagram;

  // --- OPENINGSTIJDEN ---
  const lijst = document.getElementById('openingstijden-lijst');
  c.openingstijden.forEach(function (o) {
    const li = document.createElement('li');
    if (o.tijd === 'Gesloten') li.classList.add('gesloten');
    li.innerHTML =
      '<span class="dag">' + o.dag + '</span>' +
      '<span class="tijd">' + o.tijd + '</span>';
    lijst.appendChild(li);
  });

  // --- FOOTER ---
  document.getElementById('footer-naam').textContent = c.bedrijfsnaam;
  const kvkEl = document.getElementById('footer-kvk');
  if (c.kvkNummer && !c.kvkNummer.includes('INVULLEN')) {
    kvkEl.textContent = 'KVK: ' + c.kvkNummer;
  } else {
    kvkEl.remove();
  }
  document.getElementById('footer-jaar').textContent = new Date().getFullYear();

  // --- HAMBURGER MENU ---
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle.addEventListener('click', function () {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
});
