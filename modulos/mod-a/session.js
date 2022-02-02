
//CONTENT TO BE FILTER (Cntt)
var Ex1 = document.querySelector('.ex1')
var Ex2 = document.querySelector('.ex2')
var Ex3 = document.querySelector('.ex3')
var Ex4 = document.querySelector('.ex4')

var BtnEx1 = document.querySelector('.btn-ex1')

var noContent = document.querySelector('.off') 


// END OF CONTENT TO BE FILTER (Cntt)

function btn1() {
    if (Ex1.style.display === 'none'|| BtnEx1.style.display === 'none'|| noContent.style.display === 'block') {
        Ex1.style.display = 'flex'
        BtnEx1.style.display = 'flex'

        noContent.style.display = 'none'

    }
     else {
        Ex1.style.display = 'flex'
        BtnEx1.style.display = 'flex'
        noContent.style.display = 'none'

    }

}

function btn2() {
    if (Ex1.style.display === 'flex' || BtnEx1.style.display === 'flex'|| noContent.style.display === 'none') {
        Ex1.style.display = 'none'
        BtnEx1.style.display = 'none'

        noContent.style.display = 'block'
    }
     else {
        Ex1.style.display = 'none'
        BtnEx1.style.display = 'none'

        noContent.style.display = 'block'

    }

}
function btn3() {
    if (Ex1.style.display === 'flex' || BtnEx1.style.display === 'flex'|| noContent.style.display === 'none') {
        Ex1.style.display = 'none'
        BtnEx1.style.display = 'none'

        noContent.style.display = 'block'
    }
     else {
        Ex1.style.display = 'none'
        BtnEx1.style.display = 'none'

        noContent.style.display = 'block'

    }

}
function btn4() {
    if (Ex1.style.display === 'flex' || BtnEx1.style.display === 'flex'|| noContent.style.display === 'none') {
        Ex1.style.display = 'none'
        BtnEx1.style.display = 'none'

        noContent.style.display = 'block'
    }
     else {
        Ex1.style.display = 'none'
        BtnEx1.style.display = 'none'

        noContent.style.display = 'block'

    }

}


  var loader = document.querySelector('#preloader')
  window.addEventListener("load", function () {
      loader.style.display = "none"
  })
