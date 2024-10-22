// Get the review count from localStorage
let reviewCounter = localStorage.getItem('reviewCounter') || 0;

// Display the review count
function displayReviewCount() {
    let reviewCountDisplay = document.querySelector('#reviewCount');
    reviewCountDisplay.textContent = `You have submitted ${reviewCounter} reviews so far.`;
}

// Call the function to display the count on page load
displayReviewCount();
