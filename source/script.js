let mainHeader = document.querySelector('.main-header');
let headerToggle = document.querySelector('.main-header__toggle');

mainHeader.classList.remove('main-header--nojs');

headerToggle.addEventListener('click', function () {
  if (mainHeader.classList.contains('main-header--closed')) {
    mainHeader.classList.remove('main-header--closed');
    mainHeader.classList.add('main-header--opened');
  } else {
    mainHeader.classList.add('main-header--closed');
    mainHeader.classList.remove('main-header--opened');
  }
});

