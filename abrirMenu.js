const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".btn-acao");
const overlay = document.querySelector(".overlay");

toggle.addEventListener("click", () => {

    toggle.classList.toggle("ativo");
    menu.classList.toggle("ativo");
    overlay.classList.toggle("ativo");

});

overlay.addEventListener("click", () => {

    toggle.classList.remove("ativo");
    menu.classList.remove("ativo");
    overlay.classList.remove("ativo");

});