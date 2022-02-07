window.addEventListener("load", ()=>{
    document.body.classList.remove("preload")
})

//Increment code for blur added
let blure = document.querySelector('.overlay_first')
//Increment code for blur added


document.addEventListener("DOMContentLoaded", () =>{
    const nav = document.querySelector('.nav')

    document.querySelector('#btnNav').addEventListener("click", ()=>{
        nav.classList.add("nav--open")
        blure.style.display='block'

    })

    document.querySelector('.nav__overlay').addEventListener("click", ()=>{
        nav.classList.remove("nav--open")
            blure.style.display='none'

    })
    document.querySelector('#homePage').addEventListener("click", ()=>{
        nav.classList.remove("nav--open")
            blure.style.display='none'

    })

    document.querySelector('.voltar').addEventListener("click", ()=>{
        nav.classList.remove("nav--open")
            blure.style.display='none'

    })

})



//This code used to rotate drop icon(-180deg)

$('.li .second').click(function () {
    $('.li .second span').toggleClass("rotate");
});
