`use strict`;
const navBtn = document.querySelector(`.mobile-navigation-buttons`);
const nav = document.querySelector(`.index-nav, .mackat`);
navBtn.addEventListener(`click`, function () {
  nav.classList.toggle(`display`);
});
