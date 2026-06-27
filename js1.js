const toggle = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
});

const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});