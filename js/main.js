const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;
menuButton.addEventListener('click', () => {
  // if (!menuOpen) {
  //   menuButton.classList.add('open');
  //   navLinks.classList.add('open');
  //   menuOpen = true;
  // } else {
  //   menuButton.classList.remove('open');
  //   navLinks.classList.remove('open');
  //   menuOpen = false;
  // }
    menuButton.classList.toggle('open');
    navLinks.classList.toggle('dropdown-open');
});