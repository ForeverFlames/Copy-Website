const menuButton = document.getElementById("menu-button");
const sidebarTitle = document.getElementById("sidebar-title");
const navGroups = document.querySelectorAll(".nav-group");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let current = 0;

menuButton.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});

navGroups.forEach((group) => {
    group.querySelector(".nav-main").addEventListener("click", () => {
        navGroups.forEach((other) => other.classList.remove("open"));
        group.classList.add("open");
    });
});

sidebarTitle.addEventListener("click", () => {
    navGroups.forEach((group) => group.classList.remove("open"));
});

function showSlide(index) {
    slides[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
}

prevButton.addEventListener("click", () => showSlide(current - 1));
nextButton.addEventListener("click", () => showSlide(current + 1));
