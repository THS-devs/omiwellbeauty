const mobile_toggle_open = document.querySelector('.icon-hamburger');
const mobile_toggle_close = document.querySelector('.icon-close');
const mobile_menu_drawer = document.querySelector('.mobile-menu-drawer');
const closeButton = document.querySelector('.menu-drawer-close-button');


mobile_toggle_open.addEventListener('click', function (e) {
  const mobile_toggle = document.querySelector('.mobile-toggle');
  mobile_toggle.classList.add('active');
  mobile_menu_drawer.classList.add('active');
});

mobile_toggle_close.addEventListener('click', function (e) {
  const mobile_toggle = document.querySelector('.mobile-toggle');
  mobile_toggle.classList.remove('active');
  mobile_menu_drawer.classList.remove('active');
});

closeButton.addEventListener('click', function (e) {
  const closestDetails = closeButton.closest('details'); // Find the closest <details> element
  if (closestDetails) {
    closestDetails.removeAttribute('open'); // Remove the 'open' attribute from the <details> element
  }
});

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
