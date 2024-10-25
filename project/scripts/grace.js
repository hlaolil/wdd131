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

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("refillForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission to demonstrate the message

        // Validate the prescription number (assuming it should be digits only, for example)
        const prescriptionInput = document.getElementById("prescription");
        const prescriptionPattern = /^\d+$/; // Adjust based on your prescription format

        if (!prescriptionPattern.test(prescriptionInput.value)) {
            alert("Please enter a valid prescription number.");
            prescriptionInput.focus();
            return;
        }

        // If all validations pass, display confirmation message
        confirmationMessage.style.display = "block";
    });
});
