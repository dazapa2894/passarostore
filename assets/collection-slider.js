var collection_swiper = new Swiper('.collection-swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 8,

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
      centeredSlides: true,
    },
    992: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
});