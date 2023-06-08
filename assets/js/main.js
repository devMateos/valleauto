/* HEADER */
let header = document.querySelector("header");
let hero = document.querySelector("#hero");
/* Transparent header */
document.addEventListener("scroll", () => {
    if (window.scrollY > hero.getBoundingClientRect().top) {
        header.classList.remove("transparent");
    } else {
        header.classList.add("transparent");
    }
});
/* Hide/show header in mobile */
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        header.classList.add("hide-header");
    } else {
        header.classList.remove("hide-header");
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

/* MOBILE MENU */
let openMobileMenu = document.querySelector("#open-mobile-menu");
let closeMobileMenu = document.querySelector("#close-mobile-menu");
let mobileMenu = document.querySelector("#mobile-menu");
openMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.add("show-menu");
});
closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("show-menu");
})