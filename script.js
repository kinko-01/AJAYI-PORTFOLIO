document.addEventListener("DOMContentLoaded", function () {
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
const navLinks = nav.querySelectorAll("a");

// Mobile navigation toggle
menuToggle.addEventListener("click", function () {
const isOpen = nav.classList.toggle("open");

menuToggle.setAttribute("aria-expanded", isOpen);
menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close navigation after clicking a link
navLinks.forEach(function (link) {
link.addEventListener("click", function () {
nav.classList.remove("open");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.textContent = "☰";
});
});

// Close navigation when switching to desktop
window.addEventListener("resize", function () {
if (window.innerWidth > 760) {
nav.classList.remove("open");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.textContent = "☰";
}
});

// Automatically update footer year
const year = document.querySelector("#year");

if (year) {
year.textContent = new Date().getFullYear();
}
});
