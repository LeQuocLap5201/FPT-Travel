// $(document).ready(function(){
//   $(window).scroll(function(){
//     if($(this).scrollTop() > 500){
//         $('#topbt').fadeIn();
//     }else{
//         $('#topbt').fadeOut();
//     }
//   });
//   $('#topbt').click(function(){
//     $('html, body').animate({scrollTop : 0}, 800)
//   });
// });

var swiper = new Swiper(".slide-container", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination.slide",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper1 = new Swiper(".swiper-container-top", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-top",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
  },
});

var swiper2 = new Swiper(".swiper-container-book", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".book",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },
  },
});

var swiper3 = new Swiper(".img", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".sp-img",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var splide = new Splide(".splide", {
  type: "loop",
  autoplay: true,
}).mount();
