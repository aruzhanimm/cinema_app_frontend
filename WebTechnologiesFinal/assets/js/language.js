const buttons = document.querySelectorAll(".language-btn");
let translations = {};
let currentLang = "en";

// Загружаем JSON
async function loadTranslations() {
  try {
    const res = await fetch("assets/js/lang.json");
    translations = await res.json();
  } catch (e) {
    console.error("Ошибка загрузки lang.json:", e);
  }
}

// Применяем язык
function setLanguage(lang) {
  if (!translations[lang]) return;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];
    if (translation) {
      if (el.placeholder !== undefined && el.tagName === "INPUT") {
        el.placeholder = translation;
      } else {
        el.textContent = translation;
      }
    }
  });
  currentLang = lang;
  localStorage.setItem("lang", lang);
}

// Смена языка при клике
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    setLanguage(lang);
  });
});

// Запуск
window.addEventListener("DOMContentLoaded", async () => {
  await loadTranslations();
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
});
