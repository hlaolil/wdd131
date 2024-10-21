// Footer Year and Last Modified Date
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Set the current year for the footer
year.textContent = new Date().getFullYear();

// Set the last modification date of the page
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Product Data
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Capitalize Product Names and Populate Dropdown
function populateDropdown() {
    products.forEach(product => {
        // Capitalize first letter of each word in the product name
        product.name = product.name
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        // Add the product name to the select dropdown
        displayProduct(product);
    });
}

// Function to display product in the dropdown
function displayProduct(product) {
    const productNameOption = document.createElement('option');
    productNameOption.textContent = `${product.name} (Rating: ${product.averagerating})`;
    productNameOption.value = product.id;
    document.querySelector('#productName').append(productNameOption);
}

// Track the number of reviews using localStorage
let reviewCounter = localStorage.getItem('reviewCounter') || 0;

// Display the current review count
function displayReviewCount() {
    let reviewCountDisplay = document.querySelector('#reviewCount');
    if (!reviewCountDisplay) {
        reviewCountDisplay = document.createElement('p');
        reviewCountDisplay.id = 'reviewCount';
        document.querySelector('form').prepend(reviewCountDisplay);
    }
    reviewCountDisplay.textContent = `You have submitted ${reviewCounter} reviews so far.`;
}

// Add event listener to the form for submission
document.querySelector('form').addEventListener('submit', (event) => {
    // Prevent the default behavior for testing, comment this line to allow form submission
    event.preventDefault(); 

    // Increment the review counter
    reviewCounter++;
    localStorage.setItem('reviewCounter', reviewCounter);

    // Update the review count display
    displayReviewCount();

    // Optionally, reset the form or redirect the user after submission
    event.target.reset();  // Resets the form fields (comment this out if you want to keep the data)
});

// Initialize the dropdown and display count
populateDropdown();
displayReviewCount();
