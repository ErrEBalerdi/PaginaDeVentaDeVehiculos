let swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spacceBetween: 10,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 9500,
    disableInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
