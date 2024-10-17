const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Get the current year for footer
const date = new Date();
year.textContent = date.getFullYear();

// Get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.textContent = `Last Modified: ${lastMod}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

products.forEach(product => {
    let splitName = product.name.toLowerCase().split(' ');
    for (var i = 0; i < splitName.length; i++) {
        splitName[i] = splitName[i].charAt(0).toUpperCase() + splitName[i].substring(1);
    }
    product.name = splitName.join(' ');
    displayProduct(product);
});

function displayProduct(product) {
    const productName = document.createElement('option');
    productName.textContent = product.name;
    productName.value = product.id;
    document.querySelector('#prodName').append(productName);
}
// Use localStorage to keep track of the number of reviews completed by the user client by adding a counter to the form submission review.html page. Every time that page is loaded successfully upon form submission, add one to the counter.

let reviewCounter = localStorage.getItem('reviewCounter') || 0;
document.querySelector('form').addEventListener('submit', () => {
    reviewCounter++;
    localStorage.setItem('reviewCounter', reviewCounter);
});
