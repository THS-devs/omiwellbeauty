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

// document.addEventListener('DOMContentLoaded', function () {
//   const glide = new Glide('.glide', {
//     type: 'carousel',
//     perView: 1,
//     autoplay: 3000,
//     hoverpause: true,
//     // breakpoints: {
//     //   1024: { perView: 3 },
//     //   768: { perView: 2 },
//     //   480: { perView: 1 },
//     // },
//   });

//   glide.mount();
// });
