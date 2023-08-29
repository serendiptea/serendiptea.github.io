// Newsletter Lists
// function returnEmail() {
    //let input = document.getElementById("email_input").value
    //alert(input)
//}

function returnEmail() {
    // Get the email input value
    let input = document.getElementById("email_input").value;

    // Check if localStorage already has an array of emails
    let savedEmails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];

    // Add the new email to the array
    savedEmails.push(input);

    // Save the updated array back to localStorage
    localStorage.setItem("newsletterEmails", JSON.stringify(savedEmails));

    // Optionally, provide some feedback to the user
    alert("Thank you for subscribing!");

    // Clear the input field
    document.getElementById("email_input").value = "";
}

// Retrieve the stored email addresses
let storedEmails = JSON.parse(localStorage.getItem("newsletterEmails"));

if (storedEmails && storedEmails.length > 0) {
    // If there are stored email addresses, you can iterate through them and do something with them.
    for (let i = 0; i < storedEmails.length; i++) {
        console.log("Email " + (i + 1) + ": " + storedEmails[i]);
        // You can also display them in your HTML if desired.
        // For example, you can create a div and append the email addresses to it.
        // Replace 'outputDiv' with the ID of the HTML element where you want to display the emails.
        // document.getElementById('outputDiv').innerHTML += "<p>Email " + (i + 1) + ": " + storedEmails[i] + "</p>";
    }
} else {
    console.log("No email addresses stored in localStorage.");
}