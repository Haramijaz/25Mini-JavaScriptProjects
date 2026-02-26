// Step 1: Get button and emoji display div
let button = document.getElementById("generateBtn");
let emojiDisplay = document.getElementById("emojiDisplay");

// Step 2: Create an array of emojis
let emojis = ["😀","😂","😎","😍","🥳","😡","😭","🤯","🤔","😴","👻","🎃","💀","🐶","🐱","🦄","🌞","🌜","⚡","🍕","🍩","🍉","⚽","🎮","🚀"];

// Step 3: Add click event to button
button.addEventListener("click", function() {

    // Step 4: Get random index from 0 to length of emojis array
    let randomIndex = Math.floor(Math.random() * emojis.length);

    // Step 5: Show the emoji at that random index
    emojiDisplay.innerText = emojis[randomIndex];
});
