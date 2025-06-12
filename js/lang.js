const translations = {
  en: {
    nav: ["Sound", "Photography", "Programming", "Music", "Contact"],
    heroTitle: "DYNNI",
    heroDesc: "Sound, Photography, Programming & Music",
    tvTitle: "Sound",
    tvDesc: "Showcasing my work in sound for TV and media",
    comingSoon: "Coming soon...",
    contact: "Contact",
    send: "Send",
    name: "Name",
    email: "Email",
    message: "Message"
  },
  no: {
    nav: ["Lyd", "Fotografi", "Programmering", "Musikk", "Kontakt"],
    heroTitle: "DYNNI",
    heroDesc: "Lyd, Fotografi, Programmering & Musikk",
    tvTitle: "Lyd",
    tvDesc: "Viser frem mitt arbeid med lyd for TV og media",
    comingSoon: "Kommer snart...",
    contact: "Kontakt",
    send: "Send",
    name: "Navn",
    email: "E-post",
    message: "Melding"
  }
};

function setLanguage(lang) {
  // Nav
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach((link, i) => {
    if (translations[lang] && translations[lang].nav[i]) {
      link.textContent = translations[lang].nav[i];
    }
  });
  // Hero
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) heroTitle.textContent = translations[lang].heroTitle;
  const heroDesc = document.querySelector('.hero p');
  if (heroDesc) heroDesc.textContent = translations[lang].heroDesc;
  // TV Section
  const tvTitle = document.querySelector('.tv-projects h2');
  if (tvTitle) tvTitle.textContent = translations[lang].tvTitle;
  const tvDesc = document.querySelector('.section-desc');
  if (tvDesc) tvDesc.textContent = translations[lang].tvDesc;
  // Coming soon
  const comingSoon = document.querySelector('.coming-soon p');
  if (comingSoon) comingSoon.textContent = translations[lang].comingSoon;
  // Contact
  const contactTitle = document.querySelector('.contact-section h1');
  if (contactTitle) contactTitle.textContent = translations[lang].contact;
  const sendBtn = document.querySelector('.contact-form button');
  if (sendBtn) sendBtn.textContent = translations[lang].send;
  const nameLabel = document.querySelector('label[for="name"]');
  if (nameLabel) nameLabel.textContent = translations[lang].name;
  const emailLabel = document.querySelector('label[for="email"]');
  if (emailLabel) emailLabel.textContent = translations[lang].email;
  const messageLabel = document.querySelector('label[for="message"]');
  if (messageLabel) messageLabel.textContent = translations[lang].message;
  // Lang button active
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`${lang}-btn`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('en-btn')?.addEventListener('click', () => setLanguage('en'));
  document.getElementById('no-btn')?.addEventListener('click', () => setLanguage('no'));
}); 