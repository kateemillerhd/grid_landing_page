const menuBtn = document.getElementById("menu");
const popMenu = document.getElementById("pop-menu");
const hero = document.querySelector(".hero");
const container = document.querySelector(".container");
const menuIcon = document.querySelector("#menu img");

menuBtn.addEventListener("click", () => {
    popMenu.classList.toggle("hidden");
    hero.classList.toggle("hidden");
    container.classList.toggle("menu-open");

    if (container.classList.contains("menu-open")) {
        menuIcon.src = "./assets/images/icon-close.svg";
        menuIcon.alt = "close menu";
    } else {
        menuIcon.src = "./assets/images/icon-menu.svg";
        menuIcon.alt = "open menu";
    }
});