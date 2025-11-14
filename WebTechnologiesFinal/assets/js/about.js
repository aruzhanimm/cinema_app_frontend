const langToggle = document.getElementById("languageToggle");
const langMenu = document.querySelector(".language-menu");

if (langToggle && langMenu) {
    langToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        langMenu.classList.toggle("active");
    });

    document.addEventListener("click", () => {
        langMenu.classList.remove("active");
    });
}

const openLogin = document.getElementById("openLogin");
const registerBox = document.getElementById("registerBox");
const closeLogin = document.querySelector("#registerBox .close");

if (openLogin && registerBox && closeLogin) {
     openLogin.addEventListener("click", function(e) {
        e.preventDefault();
        registerBox.style.display = "block";
    });
     closeLogin.addEventListener("click", function() {
        registerBox.style.display = "none";
    });
    window.addEventListener("click", function(e) {
        if (e.target === registerBox) {
            registerBox.style.display = "none";
        }
    });
}