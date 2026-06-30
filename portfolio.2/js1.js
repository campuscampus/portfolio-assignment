const toggle = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".navbar");
const themeButton = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateNavButton() {
    const isOpen = navbar.classList.contains("nav-open");
    toggle.textContent = isOpen ? "X" : "\u2630";
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
}

function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-mode");
    themeButton.textContent = isDark ? "Light" : "Dark";
    themeButton.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
}

toggle.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
    updateNavButton();
});

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateThemeButton();
});

window.addEventListener("load", () => {
    document.body.classList.add("skills-loaded");
});

updateNavButton();
updateThemeButton();
