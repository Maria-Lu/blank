const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger_animate');
  menu.classList.toggle('header__menu_visible');
})
