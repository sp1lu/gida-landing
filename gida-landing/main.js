// Burger menu
const burgerMenu = document.querySelector("#burger-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuItem = document.querySelector(".mobile-menu-item");
const header = document.querySelector(".landing-header");

burgerMenu.addEventListener('click', function (e) {
    mobileMenu.classList.toggle("menu-toggle");
    e.stopPropagation();
})

mobileMenuItem.addEventListener('click', function () {
    if (mobileMenu.classList.contains("menu-toggle")) {
        mobileMenu.classList.toggle("menu-toggle");
    }
})

document.body.addEventListener('click', function () {
    if (mobileMenu.classList.contains("menu-toggle")) {
        mobileMenu.classList.toggle("menu-toggle");
    }
})