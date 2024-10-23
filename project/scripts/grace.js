// Select hamburger and navigation menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');

// Toggle 'open' class on the navigation when hamburger is clicked
hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('open');
});
