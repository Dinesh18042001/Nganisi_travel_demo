let nav = document.querySelector(".header");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
};


$('.banner_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
});


$(document).ready(function(){
    $(".feature-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        },
        1200: {
          items: 4
        },
        1400: {
          items: 5
        }
      }
    });
  });



  $(document).ready(function(){
    $(".owl-carousel2").owlCarousel({
        loop: true,
        navText: ["<i class='fa solid fa-arrow-left'></i>", "<i class='fa solid fa-arrow-right'></i>"],
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 3000, 
                autoplayHoverPause: true
            },
            600: {
                items: 2, 
                nav: true,
                autoplay: false
            },
            1000: {
                items: 3,
                nav: true,
                autoplay: false
            }
        }
    });
  });



  var swiper = new Swiper('.Slider-container', {
    effect: 'cards',
    grabCursor: true,
    centerdSlides: true,
    loop: true,
  });
  // swiper.changeDirection('vertical');
  
  




  