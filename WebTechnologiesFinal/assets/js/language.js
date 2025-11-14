document.addEventListener("DOMContentLoaded", async () => {
    const buttons = document.querySelectorAll(".language-btn");
    let translations = {};
    let currentLang = "en";

    async function loadTranslations() {
        const res = await fetch("assets/js/lang.json");
        translations = await res.json();
    }

    function applyTranslations(lang) {
        currentLang = lang;
        localStorage.setItem("lang", lang);

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        const pwdMsg = document.getElementById("passwordMessage");
        if (pwdMsg) {
            pwdMsg.dataset.strong = translations[lang]["password_strong"];
            pwdMsg.dataset.requirements =
                translations[lang]["password_requirements"];
        }
    }

    buttons.forEach((btn) =>
        btn.addEventListener("click", () =>
            applyTranslations(btn.dataset.lang)
        )
    );

    await loadTranslations();
    applyTranslations(localStorage.getItem("lang") || "en");
});
