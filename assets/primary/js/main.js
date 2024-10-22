const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Autoplay settings
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // Responsive breakpoints
  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
  },
}); 

console.log('hello');
