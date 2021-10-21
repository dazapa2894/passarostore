const swiper = new Swiper('.collection-swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 8,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});