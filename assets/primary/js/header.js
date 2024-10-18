const mobile_toggle_open = document.querySelector('.icon-hamburger');
const mobile_toggle_close = document.querySelector('.icon-close');


mobile_toggle_open.addEventListener('click', function (e) {
  const mobile_toggle = document.querySelector('.mobile-toggle');
  mobile_toggle.classList.add('active');
});
mobile_toggle_close.addEventListener('click', function (e) {
  const mobile_toggle = document.querySelector('.mobile-toggle');
  mobile_toggle.classList.remove('active');
});

