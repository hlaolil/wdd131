// Toggle the navigation menu on mobile
const hamButton = document.querySelector('.ham-button');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    const expanded = hamButton.getAttribute('aria-expanded') === 'true' || false;
    hamButton.setAttribute('aria-expanded', !expanded);
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
