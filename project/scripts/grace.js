document.addEventListener("DOMContentLoaded", function() {
    const hamButton = document.querySelector('.ham-button');
    const navMenu = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle menu visibility
        hamButton.classList.toggle('active'); // Toggle the X icon
        const isActive = navMenu.classList.contains('active');
        hamButton.setAttribute('aria-expanded', isActive);
    });
});
