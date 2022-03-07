const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    navLinks.classList.toggle('dropdown-open');
});



