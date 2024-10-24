const hamButton = document.querySelector('.ham-button');
const navMenu = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
