// Selects the hamburger button from index2.html line 14.
const toggle = document.querySelector(".nav-toggle");

// Selects the full navbar from index2.html line 11.
const navbar = document.querySelector(".navbar");

// Selects the dark/light mode button from index2.html line 20.
const themeButton = document.querySelector("#theme-toggle");

// Reads the saved theme value from localStorage.
const savedTheme = localStorage.getItem("theme");

// If the user previously selected dark mode, apply it when the page opens.
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Updates the hamburger button text and accessibility labels.
function updateNavButton() {
    // Checks whether the navbar currently has the nav-open class.
    const isOpen = navbar.classList.contains("nav-open");

    // Shows X when the menu is open, and the hamburger icon when it is closed.
    toggle.textContent = isOpen ? "X" : "\u2630";

    // Tells screen readers whether the navigation menu is expanded.
    toggle.setAttribute("aria-expanded", isOpen);

    // Changes the button label depending on whether the menu is open or closed.
    toggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
}

// Updates the theme button text and accessibility label.
function updateThemeButton() {
    // Checks whether dark mode is currently active on the body.
    const isDark = document.body.classList.contains("dark-mode");

    // Shows the opposite action: Light when dark mode is on, Dark when light mode is on.
    themeButton.textContent = isDark ? "Light" : "Dark";

    // Changes the label so screen readers know what the theme button will do.
    themeButton.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
}

// Opens and closes the navigation menu when the hamburger button is clicked.
toggle.addEventListener("click", () => {
    // Adds nav-open if it is missing, or removes it if it is already present.
    navbar.classList.toggle("nav-open");

    // Updates the hamburger button after the menu state changes.
    updateNavButton();
});

// Switches between dark mode and light mode when the theme button is clicked.
themeButton.addEventListener("click", () => {
    // Adds or removes dark-mode on the body.
    document.body.classList.toggle("dark-mode");

    // Checks the new theme after toggling.
    const isDark = document.body.classList.contains("dark-mode");

    // Saves the selected theme so it remains after refreshing the page.
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Updates the theme button after the theme changes.
    updateThemeButton();
});

// Starts the skill bar animation after the page finishes loading.
window.addEventListener("load", () => {
    // Adds skills-loaded to the body, which triggers the CSS skill bar widths.
    document.body.classList.add("skills-loaded");
});

// Sets the correct hamburger button text when the page first opens.
updateNavButton();

// Sets the correct theme button text when the page first opens.
updateThemeButton();
