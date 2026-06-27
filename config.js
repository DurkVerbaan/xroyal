const websiteContent = {

  // ── Bedrijfsgegevens ──────────────────────────────────
  bedrijfsnaam:  "X Royal Barbershop",
  telefoonnummer: "050 - 211 3546",
  email:         "xroyalbarbershop@gmail.com",
  adres:         "Stationsweg 24, 9781 CH Bedum",
  googleMapsLink: "https://maps.google.com/?q=Stationsweg+24,+9781+CH+Bedum",
  instagram:     "https://www.instagram.com/xroyal_barbershop/",
  tiktok:        "https://www.tiktok.com/@x.royal.barbersho",
  boekingslink:  "#salonhub-create-client:xroyalbarbershop-salon:bedum",

  // ── Hero ──────────────────────────────────────────────
  heroTitel:    "X Royal Barbershop",
  heroSubtitel: "Knippen, scheren en baardverzorging in Bedum — door een kapper die weet wat hij doet.",

  // ── Voordelen ─────────────────────────────────────────
  voordelen: [
    { icoon: "✦", titel: "Strak resultaat",      tekst: "Van moderne fade tot klassieke coupe — altijd afgestemd op jouw gezichtsvorm en stijl." },
    { icoon: "✦", titel: "Compleet verzorgd",  tekst: "Knippen, baard bijwerken, gezicht verzorgen — het kan allemaal tijdens één bezoek. Kopje koffie staat al voor je klaar, dus neem rustig de tijd." },
    { icoon: "✦", titel: "Gratis parkeren",         tekst: "Geen speurtocht naar een plekje. Zet je auto gratis voor de deur en loop zo naar binnen." }
  ],

  // ── Diensten & tarieven ───────────────────────────────
  diensten: [
    { naam: "Knippen kinderen (4 t/m 12 jaar)",                         prijs: "€ 22,00", highlight: false },
    { naam: "Knippen",                                                 prijs: "€ 28,50", highlight: true  },
    { naam: "Knippen & baard contour",                                 prijs: "€ 30,00", highlight: false },
    { naam: "Knippen & baard (full)",                                  prijs: "€ 41,00", highlight: false },
    { naam: "Knippen & Italian shave",                                 prijs: "€ 42,00", highlight: false },
    { naam: "Knippen & epileren met touw",                             prijs: "€ 40,00", highlight: false },
    { naam: "Knippen & stoom, scrub & masker",                         prijs: "€ 48,00", highlight: false },
    { naam: "VIP — haar, baard, epileren & luxe gezichtsbehandeling",  prijs: "€ 65,00", highlight: false }
  ],

  // ── Lookbook ──────────────────────────────────────────
  lookbook: [
    { bestand: "images/lookbook-1.jpg", label: "" },
    { bestand: "images/lookbook-2.jpg", label: "" },
    { bestand: "images/lookbook-3.jpg", label: "" },
    { bestand: "images/lookbook-4.jpg", label: "" },
    { bestand: "images/lookbook-5.jpg", label: "" },
    { bestand: "images/lookbook-6.jpg", label: "" },
    { bestand: "images/lookbook-7.jpg", label: "" },
    { bestand: "images/lookbook-8.jpg", label: "" }
  ],

  // ── Openingstijden ────────────────────────────────────
  openingstijden: [
    { dag: "Maandag",   tijd: "12:00 – 18:00" },
    { dag: "Dinsdag",   tijd: "09:30 – 18:00" },
    { dag: "Woensdag",  tijd: "09:30 – 18:00" },
    { dag: "Donderdag", tijd: "09:30 – 20:00" },
    { dag: "Vrijdag",   tijd: "09:30 – 20:00" },
    { dag: "Zaterdag",  tijd: "09:00 – 16:00" },
    { dag: "Zondag",    tijd: "Gesloten" }
  ],

  // ── Over ons ──────────────────────────────────────────
  overOns: "Bij X Royal Barbershop draait alles om vakmanschap en persoonlijke aandacht. Eigenaar Ahmad heeft jarenlange ervaring en heeft zijn eigen salon opgericht om elke klant de beste versie van zichzelf te geven. Of je nu voor een strakke fade, een klassieke coupe of een luxe baardbehandeling komt — je vertrekt altijd tevreden.",

  // ── Reviews ───────────────────────────────────────────
  reviews: [
    {
      naam:    "Ramez",
      sterren: 5,
      tekst:   "Ahmad is echt een topkapper! Supervriendelijk en heeft veel ervaring met haar en baarden. De plek is heel relaxed, je wordt meteen welkom geheten, krijgt een lekker kopje koffie en natuurlijk een professionele knipbeurt. Echt een aanrader!",
      datum:   "Google review"
    },
    {
      naam:    "Harry",
      sterren: 5,
      tekst:   "Vanmorgen voor het eerst geweest. Hartelijk ontvangen door Ahmad. Neemt alle tijd voor je en geeft goed advies. En natuurlijk zeer blij met het resultaat. Jullie hebben er weer een klant bij 👍",
      datum:   "Google review"
    },
    {
      naam:    "Björn Kampyon",
      sterren: 5,
      tekst:   "Ik kom al 5 jaar bij Ahmad, nu hij zijn eigen kapperszaak heeft nog steeds. Hij knipt mij altijd goed en de sfeer is super.",
      datum:   "Google review"
    }
  ],

  googleReviewsLink: "https://www.google.com/search?sca_esv=8b4e0f10aed68b61&rlz=1C5OZZY_enNL1214NL1214&sxsrf=APpeQnsnWhE96JUk73-i49UAyYtvZPsLfA:1782587267451&uds=AJ5uw1_a2D0D09lxm8gpKKOTUn4r_ma7KZ9Utblj5_vcj4acKBZsAwmh6EGQxLDxpzE8aM7XDoOQEUG93vWKIn38ZDbHEXC2YW9flBetijZTawUoXgjsDCMEesd9ECyiFtTSEpzQuXhPY28MhGA3pA3avLh3t4mxRw&q=X+Royal+barbershop+Reviews&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_-WVwL97U6eFL-N6jxTE3JZ_GMdjhQipn5_tZuG_cIMrbSce6YPSxszG3l1YKM29zFpSYx780MU0tQ5retN86lJelvVRJ5qTFdkgwuAwYJ3gqwvYlw%3D%3D&hl=nl-NL&sa=X&ved=2ahUKEwic3O2Gj6iVAxU-zgIHHQlyADIQ_4MLegQIMRAO&biw=1418&bih=729&dpr=1"

};
