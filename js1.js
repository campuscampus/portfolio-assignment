const toggle = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
});