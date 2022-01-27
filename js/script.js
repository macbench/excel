
//CONTENT TO BE FILTER (Cntt)
var Ex1 = document.querySelector('.ex1')
var Ex2 = document.querySelector('.ex2')
var Ex3 = document.querySelector('.ex3')
var Ex4 = document.querySelector('.ex4')

var noContent = document.querySelector('.off') 


// END OF CONTENT TO BE FILTER (Cntt)

function btn1() {
    if (Ex1.style.display === 'none'|| noContent.style.display === 'block') {
        Ex1.style.display = 'block'
        noContent.style.display = 'none'

    }
     else {
        Ex1.style.display = 'block'
        noContent.style.display = 'none'

    }

}

function btn2() {
    if (Ex1.style.display === 'block' || noContent.style.display === 'none') {
        Ex1.style.display = 'none'
        noContent.style.display = 'block'
    }
     else {
        Ex1.style.display = 'none'
        noContent.style.display = 'block'

    }

}
