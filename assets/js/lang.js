const translations = {
  en: {
    home: "Home",
    about: "About",
    works: "Works",
    certificates: "Certificates",
    contact: "Contact",
    certificate: "Certificate",
    contactMe: "Contact Moaz",
    downloadCv: "Download CV",
    heroSubtitle: "Application programmer",
    heroTitle: "Moaz Emad",
    heroDesc: "I am Moaz Imad, a skilled programmer with a talent for developing web and applications using languages such as HTML, Java, Flutter, and native language."
  },
  ar: {
    home: "الرئيسية",
    about: "نبذة",
    works: "الأعمال",
    certificates: "الشهادات",
    contact: "اتصل",
    certificate: "شهادة",
    contactMe: "تواصل مع معاذ",
    downloadCv: "تحميل السيرة الذاتية",
    heroSubtitle: "مبرمج تطبيقات",
    heroTitle: "معاذ عماد",
    heroDesc: "أنا معاذ عماد، مبرمج ماهر في تطوير المواقع والتطبيقات باستخدام لغات مثل HTML وJava وFlutter ولغات أخرى."
  }
};

function setLanguage(lang){
  document.documentElement.lang = lang;
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  setLanguage('en');
});
