let toggle = document.querySelector('.main-nav__toggle');
let menu = document.querySelectorAll('.main-nav__list');

toggle.classList.remove('toggle-no-js');
toggle.classList.remove('main-nav__toggle--closed');
for (let i = 0; i < menu.length; i++) {
  menu[i].classList.add('toggle-menu-off');
};

toggle.addEventListener('click', function () {
  toggle.classList.toggle('main-nav__toggle--closed');
  
  for (let i = 0; i < menu.length; i++) {
    menu[i].classList.toggle('toggle-menu-off');
  };
});