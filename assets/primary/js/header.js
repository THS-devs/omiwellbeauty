const mobile_toggle_open = document.getElementsByClassName('icon-hamburger');
const mobile_toggle_close = document.getElementsByClassName('icon-close');

console.log('hello');


mobile_toggle_open.onclick = function () {
  const mobile_toggle = document.getElementsByClassName('mobile-toggle');
  mobile_toggle.classList.toggle('active');
};
mobile_toggle_close.onclick = function () {
  const mobile_toggle = document.getElementsByClassName('mobile-toggle');
  mobile_toggle.classList.toggle('active');
};

