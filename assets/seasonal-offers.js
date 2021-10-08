const swiper = new Swiper('.seasonal-swiper-container', {
  // Optional parameters
  loop: true,
  spaceBetween: 5,
  slidesPerView: 5,
  centeredSlides: false,
  grabCursor: true,
  freeMode: true,
  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 1,
    },
    720: {
      slidesPerView: 2,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    }
  }
});