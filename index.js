// Search Bar Function
const searchInput = document.querySelector("[data-search]");
const searchButton = document.getElementById("search_button");
const articleCards = document.querySelectorAll(".article_cards");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase(); // Get the user's input and convert it to lowercase for case-insensitive comparison

articleCards.forEach(card => {
    const cardText = card.textContent.toLowerCase(); // Get the card's text and convert it to lowercase
    if (cardText.includes(searchTerm)) {
    card.style.display = "block"; // Show the card if it contains the search term
    } else {
    card.style.display = "none"; // Hide the card if it doesn't contain the search term
    }
});

// Clear the search input field after the search is performed
    searchInput.value = "";
});

// Newsletter Lists
function returnEmail() {
    let input = document.getElementById("email_input").value
    alert(input)
}