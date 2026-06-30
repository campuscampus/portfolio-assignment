const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
const navbar = document.querySelector<HTMLElement>(".navbar");
const themeButton = document.querySelector<HTMLButtonElement>("#theme-toggle");

const savedTheme: string | null = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateNavButton(): void {
    if (!toggle || !navbar) return;

    const isOpen: boolean = navbar.classList.contains("nav-open");

    toggle.textContent = isOpen ? "X" : "\u2630";
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
}

function updateThemeButton(): void {
    if (!themeButton) return;

    const isDark: boolean = document.body.classList.contains("dark-mode");

    themeButton.textContent = isDark ? "Light" : "Dark";
    themeButton.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
}

toggle?.addEventListener("click", () => {
    if (!navbar) return;

    navbar.classList.toggle("nav-open");
    updateNavButton();
});

themeButton?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark: boolean = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateThemeButton();
});

window.addEventListener("load", () => {
    document.body.classList.add("skills-loaded");
});

updateNavButton();
updateThemeButton();