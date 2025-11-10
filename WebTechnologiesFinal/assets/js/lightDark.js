document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;
    const brandName = document.getElementById("brandName").querySelector("span");

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeIcon.setAttribute("name", "moon-outline");
        brandName.style.color = "black";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            themeIcon.setAttribute("name", "moon-outline");
            brandName.style.color = "black";
            localStorage.setItem("theme", "light");
        } else {
            themeIcon.setAttribute("name", "sunny-outline");
            brandName.style.color = "white";
            localStorage.setItem("theme", "dark");
        }
    });
});
