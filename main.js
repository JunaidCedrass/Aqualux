import './styles.css';

const whatsappUrl = 'https://wa.me/27651431426?text=Hi%20Raees%2C%20I%27d%20like%20a%20free%20pool%20maintenance%20quote.';
const phoneUrl = 'tel:+27651431426';

const icons = {
  message: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.2 8.2 0 0 1-3.2-.7L4 20l1.7-3.8A7.2 7.2 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" /></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 4.3 5.8 5.5a2 2 0 0 0-.7 2.4c1.9 5.2 5.8 9.1 11 11a2 2 0 0 0 2.4-.7l1.2-1.6a1.8 1.8 0 0 0-.3-2.5l-2.2-1.7a1.8 1.8 0 0 0-2.3.1l-1 1a13.6 13.6 0 0 1-4.4-4.4l1-1a1.8 1.8 0 0 0 .1-2.3L9.9 4.6a1.8 1.8 0 0 0-2.5-.3Z" /></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7" /></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>',
};

const packages = [
  { name: 'Bi-Monthly Package', price: 'R850', unit: '/month', features: ['Vacuuming of pool floor', 'Brushing walls and tiles', 'Sweeping around pool area', 'Empty skimmer and pump baskets', 'Water level and chemical check'] },
  { name: 'Weekly Package', price: 'R1,200', unit: '/month', popular: true, features: ['Full vacuuming and brushing', 'Sweeping and leaf removal', 'Filter backwash and rinse', 'Chemical testing and balancing', 'Equipment inspection'] },
  { name: 'Once-Off Restoration', price: 'R1,500', unit: 'once-off', features: ['Deep clean and scrub', 'Shock treatment and algae removal', 'Full vacuum and filter clean', 'Chemical balance and water test'] },
];

const packageCards = packages.map((pkg) => `
  <article class="package-card ${pkg.popular ? 'is-popular' : ''}">
    ${pkg.popular ? '<span class="popular-label">Most popular</span>' : ''}
    <h3>${pkg.name}</h3>
    <div class="price">
      <span class="price-label">From</span>
      <strong>${pkg.price}</strong>
      <span>${pkg.unit}</span>
    </div>
    <ul>${pkg.features.map((feature) => `<li>${icons.check}<span>${feature}</span></li>`).join('')}</ul>
    <a class="text-link" href="${whatsappUrl}" target="_blank" rel="noreferrer">Request this package ${icons.arrow}</a>
  </article>
`).join('');

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#home" aria-label="AquaLux home"><img src="/assets/aqualux-logo2.png" alt="" /><span>AQUALUX</span></a>
    <nav class="main-nav" aria-label="Main navigation">
      <a href="#home">Home</a><a href="#packages">Packages</a><a href="#why-us">Why AquaLux</a><a href="#contact">Contact</a>
    </nav>
    <a class="button button-small" href="${whatsappUrl}" target="_blank" rel="noreferrer">${icons.message}<span>Get a quote</span></a>
    <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-content">
        <p class="eyebrow">Pool maintenance service</p>
        <h1>AQUALUX</h1>
        <p class="hero-copy">Professional pool care in Cape Town. Keeping your pool clean, safe and ready to swim.</p>
        <div class="hero-actions"><a class="button" href="${whatsappUrl}" target="_blank" rel="noreferrer">${icons.message}<span>WhatsApp us</span></a><a class="button button-outline" href="${phoneUrl}">${icons.phone}<span>Call us</span></a></div>
      </div>
      <a class="scroll-cue" href="#about" aria-label="Scroll to learn more"><span></span></a>
    </section>

    <section class="about section-shell" id="about">
      <div class="about-copy reveal"><p class="eyebrow">Cape Town pool care</p><h2>Reliable care for a pool that is always ready.</h2><p>AquaLux provides straightforward, professional pool maintenance for Cape Town homes. From routine cleaning to once-off restoration, every visit is focused on clean water and careful service.</p><div class="location">${icons.pin}<span>Serving Cape Town</span></div></div>
      <div class="about-image reveal"><img src="/assets/gallery-pool.jpg" alt="Well-maintained residential pool in a landscaped garden" loading="lazy" /></div>
    </section>

    <section class="packages section-shell" id="packages"><div class="section-heading reveal"><p class="eyebrow">Maintenance packages</p><h2>Simple options, clear pricing.</h2></div><div class="package-grid">${packageCards}</div></section>

    <section class="why-us section-shell" id="why-us"><div class="section-heading reveal"><p class="eyebrow">Why choose AquaLux</p><h2>Pool care you can depend on.</h2></div><div class="benefits"><article class="benefit reveal"><div class="benefit-number">01</div><h3>Reliable service</h3><p>We show up on schedule, every time. No missed visits, no excuses.</p></article><article class="benefit reveal"><div class="benefit-number">02</div><h3>Premium products</h3><p>Professional-grade chemicals and equipment for the best results.</p></article><article class="benefit reveal"><div class="benefit-number">03</div><h3>Cape Town experts</h3><p>Local knowledge and attention to detail for coastal pool care.</p></article></div></section>

    <section class="contact section-shell" id="contact"><div class="contact-inner reveal"><p class="eyebrow">Get in touch</p><h2>Contact AquaLux for a free quote.</h2><div class="contact-details"><p><strong>Raees Albertus</strong><br /><a href="${phoneUrl}">+27 65 143 1426</a></p><p><strong>Saaleh Albertus</strong><br /><a href="tel:+27744468464">+27 74 446 8464</a></p><p><a href="mailto:aqualuxpm@gmail.com">aqualuxpm@gmail.com</a></p></div><div class="contact-actions"><a class="button" href="${whatsappUrl}" target="_blank" rel="noreferrer">${icons.message}<span>Contact us on WhatsApp</span></a></div></div></section>
  </main>

  <footer class="site-footer"><div class="footer-brand"><a class="brand" href="#home">
  <img src="/assets/aqualux-logo2.png" alt="" /><span>AQUALUX</span></a><p>Pool maintenance in Cape Town.</p></div><div class="footer-links"><a href="#packages">Packages</a><a href="#why-us">Why AquaLux</a><a href="#contact">Contact</a></div><p class="copyright">© 2026 AQUALUX. All rights reserved.</p></footer>
  <a class="floating-chat" href="${whatsappUrl}" target="_blank" rel="noreferrer" aria-label="Chat to AquaLux on WhatsApp">${icons.message}</a>
`;

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navigation.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });
document.querySelectorAll('.reveal, .package-card, .benefit').forEach((element) => revealObserver.observe(element));
