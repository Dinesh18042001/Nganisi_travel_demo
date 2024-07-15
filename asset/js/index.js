let nav = document.querySelector(".header");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

$(".banner_slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(document).ready(function () {
  $(".feature-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });
});

$(document).ready(function () {
  $(".owl-carousel2").owlCarousel({
    loop: true,
    navText: [
      "<i class='fa solid fa-arrow-left'></i>",
      "<i class='fa solid fa-arrow-right'></i>",
    ],
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
      },
      600: {
        items: 2,
        nav: true,
        autoplay: false,
      },
      1000: {
        items: 3,
        nav: true,
        autoplay: false,
      },
    },
  });
});

var swiper = new Swiper(".Slider-container", {
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* custom arrow js start */
function slideToPrev() {
  swiper.slidePrev();
}

function slideToNext() {
  swiper.slideNext();
}



jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});



var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}






document.addEventListener('DOMContentLoaded', function () {
  var dropdownItems = document.querySelectorAll('.dropdown-item.dropdown-toggle');

  dropdownItems.forEach(function (dropdownItem) {
      dropdownItem.addEventListener('click', function (event) {
          event.preventDefault();
          var submenu = dropdownItem.nextElementSibling;
          if (submenu.style.display === 'block') {
              submenu.style.display = 'none';
          } else {
              submenu.style.display = 'block';
          }
      });
  });
});



