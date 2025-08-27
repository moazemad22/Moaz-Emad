const translations = {
  en: {
    logo: "Moaz",
    nav: {about: "About", certificates: "Certificates", projects: "Projects", contact: "Contact"},
    hero: {title: "Hi, I'm Moaz", subtitle: "Developer & Marketing Manager"},
    about: {title: "About Me", body: "I craft digital experiences that merge code with compelling marketing."},
    cert: {title: "Certificates", item1: "Google Marketing Certification", item2: "Full‑Stack Web Development"},
    projects: {title: "Projects", item1: "E‑commerce Platform", item2: "Social Media Analytics Tool"},
    contact: {title: "Get in Touch", body: "Email: moaz@example.com"}
  },
  ar: {
    logo: "معاذ",
    nav: {about: "من أنا", certificates: "الشهادات", projects: "الأعمال", contact: "تواصل"},
    hero: {title: "مرحباً، أنا معاذ", subtitle: "مبرمج ومدير تسويق"},
    about: {title: "نبذة عني", body: "أصنع تجارب رقمية تمزج بين البرمجة والتسويق المبدع."},
    cert: {title: "الشهادات", item1: "شهادة جوجل للتسويق", item2: "تطوير ويب متكامل"},
    projects: {title: "الأعمال", item1: "منصة تجارة إلكترونية", item2: "أداة تحليل وسائل التواصل"},
    contact: {title: "تواصل معي", body: "البريد: moaz@example.com"}
  }
};

let currentLang = 'en';
const toggleBtn = document.getElementById('lang-toggle');

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  toggleBtn.textContent = lang === 'ar' ? 'EN' : 'AR';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.');
    let text = translations[lang];
    keys.forEach(k => { text = text[k]; });
    if (text) el.textContent = text;
  });
}

toggleBtn.addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
});

setLanguage(currentLang);

// Animations
window.addEventListener('load', () => {
  gsap.from('.hero h1', {y: 50, opacity: 0, duration: 1});
  gsap.from('.hero p', {y: 50, opacity: 0, duration: 1, delay: 0.3});
  gsap.to('.shape', {y: -20, repeat: -1, yoyo: true, duration: 3, ease: 'sine.inOut'});
});
