const swiper = new Swiper('.seasonal-swiper-container', {
  // Optional parameters
  loop: true,
  // when window width is < 499px
  spaceBetween: 2,
  slidesPerView: 5,
  centeredSlides: false,
  grabCursor: true,
  freeMode: true,
  breakpoints: {
    // when window width is > 499px
    499: {
      slidesPerView: 3,
    },
    // when window width is > 720px
    720: {
      slidesPerView: 5,
    },
    // when window width is > 999px
    999: {
      slidesPerView: 5,
    },
    // when window width is > 1400px
    1400: {
      slidesPerView: 6,
    }
  }
});