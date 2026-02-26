// Step 1: Select button and quote paragraph
let generateBtn = document.getElementById("generateBtn");
let quoteDisplay = document.getElementById("quote");

// Step 2: Create array of quotes
let quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Don't let yesterday take up too much of today. – Will Rogers",
    "It's not whether you get knocked down, it's whether you get up. – Vince Lombardi",
    "If you are working on something exciting, it will keep you motivated. – Unknown",
    "Success is not in what you have, but who you are. – Bo Bennett",
    "Your limitation—it’s only your imagination. – Unknown",
    "Push yourself, because no one else is going to do it for you. – Unknown",
    "Sometimes later becomes never. – Unknown",
    "Great things never come from comfort zones. – Unknown",
    "Dream it. Wish it. Do it. – Unknown"
];

// Step 3: Add click event to button
generateBtn.addEventListener("click", function() {

    // Step 4: Generate random index
    let randomIndex = Math.floor(Math.random() * quotes.length);

    // Step 5: Show the quote at random index
    quoteDisplay.innerText = quotes[randomIndex];
});
