document.addEventListener("DOMContentLoaded", function() {
    const hamButton = document.querySelector('.ham-button');
    const navMenu = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
