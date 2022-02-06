

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

//SWIPER SLIDE CODE

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  

  //LOADER CODE

  var loader = document.querySelector('#preloader')
  window.addEventListener("load", function () {
      loader.style.display = "none"
  })
