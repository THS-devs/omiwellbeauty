const mobile_toggle_open = document.querySelector('.icon-hamburger');
const mobile_toggle_close = document.querySelector('.icon-close');


mobile_toggle_open.addEventListener('click', function (e) {
  const mobile_toggle = document.getElementsByClassName('mobile-toggle');
  mobile_toggle.classList.toggle('active');
});
mobile_toggle_close.addEventListener('click', function (e) {
  const mobile_toggle = document.getElementsByClassName('mobile-toggle');
  mobile_toggle.classList.toggle('active');
});

