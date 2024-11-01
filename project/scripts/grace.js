const hamButton = document.querySelector('.ham-button');
const navigation = document.querySelector('.navigation');

// Initial HTML content for the hamburger icon
const hamburgerHTML = `
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
`;

// Close icon HTML
const closeIconHTML = '✖';

// Track the state of the menu
let isMenuOpen = false;

// Function to toggle the menu
hamButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen; // Toggle the menu state

    if (isMenuOpen) {
        // Change to close icon
        hamButton.innerHTML = closeIconHTML;
        navigation.classList.add('show'); // Show the navigation
    } else {
        // Change back to hamburger icon
        hamButton.innerHTML = hamburgerHTML;
        navigation.classList.remove('show'); // Hide the navigation
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("refillForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const prescriptionInput = document.getElementById("prescription");

    // Prefill the prescription number from localStorage, if it exists
    const savedPrescription = localStorage.getItem("prescriptionNumber");
    if (savedPrescription) {
        prescriptionInput.value = savedPrescription;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission to demonstrate the message

        // Validate the prescription number (assuming it should be digits only, for example)
        const prescriptionPattern = /^\d+$/; // Adjust based on your prescription format

        if (!prescriptionPattern.test(prescriptionInput.value)) {
            alert("Please enter a valid prescription number.");
            prescriptionInput.focus();
            return;
        }

        // Save the prescription number to localStorage
        localStorage.setItem("prescriptionNumber", prescriptionInput.value);

        // If all validations pass, display confirmation message
        confirmationMessage.style.display = "block";
    });
});

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Get the current year for footer
const date = new Date();
year.textContent = date.getFullYear();

// Get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.textContent = `Last Modified: ${lastMod}`;
