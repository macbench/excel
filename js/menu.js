window.addEventListener("load", ()=>{
    document.body.classList.remove("preload")
})

document.addEventListener("DOMContentLoaded", () =>{
    const nav = document.querySelector('.nav')

    document.querySelector('#btnNav').addEventListener("click", ()=>{
        nav.classList.add("nav--open")
    })

    document.querySelector('.nav__overlay').addEventListener("click", ()=>{
        nav.classList.remove("nav--open")
    })

    document.querySelector('.voltar').addEventListener("click", ()=>{
        nav.classList.remove("nav--open")
    })

})


//This code used to rotate drop icon(-180deg)

$('.li .second').click(function () {
    $('.li .second span').toggleClass("rotate");
});
