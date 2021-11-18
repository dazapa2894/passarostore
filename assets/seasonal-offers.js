var seasonal_swiper = new Swiper('.seasonal-swiper-container', {
  // Optional parameters
  loop: true,
  // when window width is < 499px
  slidesPerView: 2,
  spaceBetween: 5,
  centeredSlides: false,
  grabCursor: true,
  freeMode: false,
  breakpoints: {
    // when window width is > 499px
    499: {
      slidesPerView: 2,
      freeMode: false
    },
    // when window width is > 720px
    720: {
      slidesPerView: 3,
      freeMode: true
    },
    // when window width is > 999px
    999: {
      slidesPerView: 4,
      freeMode: true
    },
    // when window width is > 1400px
    1400: {
      slidesPerView: 5,
      freeMode: true
    }
  }
});