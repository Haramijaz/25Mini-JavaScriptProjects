// Step 1: Select elements
let userGuess = document.getElementById("userGuess");
let checkBtn = document.getElementById("checkBtn");
let message = document.getElementById("message");
let attemptsDisplay = document.getElementById("attempts");
let restartBtn = document.getElementById("restartBtn");

// Step 2: Initialize variables
let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1-100
let attemptsLeft = 10; // Maximum attempts

// Step 3: Function to check user guess
checkBtn.addEventListener("click", function(){

    let guess = Number(userGuess.value); // Convert input to number

    // Check if input is valid
    if(guess < 1 || guess > 100 || isNaN(guess)){
        message.innerText = "Please enter a number between 1 and 100!";
        return;
    }

    // Check guess
    if(guess === randomNumber){
        message.innerText = `🎉 Congratulations! You guessed it right: ${randomNumber}`;
        message.style.color = "lime";
        checkBtn.disabled = true; // Disable after win
    }
    else if(guess > randomNumber){
        message.innerText = "Too High! ⬆️ Try Again!";
        message.style.color = "yellow";
        attemptsLeft--;
    }
    else if(guess < randomNumber){
        message.innerText = "Too Low! ⬇️ Try Again!";
        message.style.color = "orange";
        attemptsLeft--;
    }

    // Update attempts
    attemptsDisplay.innerText = `Attempts left: ${attemptsLeft}`;

    // If no attempts left
    if(attemptsLeft === 0){
        message.innerText = `💥 Game Over! The number was ${randomNumber}`;
        message.style.color = "red";
        checkBtn.disabled = true;
    }

    // Clear input
    userGuess.value = "";
});

// Step 4: Restart Game
restartBtn.addEventListener("click", function(){
    randomNumber = Math.floor(Math.random() * 100) + 1; // New random number
    attemptsLeft = 10;
    attemptsDisplay.innerText = `Attempts left: ${attemptsLeft}`;
    message.innerText = "";
    checkBtn.disabled = false;
    userGuess.value = "";
});
