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



const imagens = document.querySelectorAll(".ilustracao .i");
const container = document.querySelector(".ilustracao");

let index = 0;
let intervalo;


function trocarImagem(){

    imagens.forEach((img)=>{
        img.classList.remove("ativo");
    });

    imagens[index].classList.add("ativo");

    index++;

    if(index >= imagens.length){
        index = 0;
    }

}


function iniciarCarrossel(){
    intervalo = setInterval(trocarImagem,1000);
}


function pararCarrossel(){
    clearInterval(intervalo);
}


trocarImagem();
iniciarCarrossel();


container.addEventListener("mouseenter", pararCarrossel);


container.addEventListener("mouseleave", iniciarCarrossel);