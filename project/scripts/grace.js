document.addEventListener("DOMContentLoaded", function() {
    const hamButton = document.querySelector('.ham-button');
    const navMenu = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        hamButton.setAttribute('aria-expanded', isActive);
    });
});
