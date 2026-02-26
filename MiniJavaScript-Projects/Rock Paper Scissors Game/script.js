// Step 1: Select elements
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let resultDisplay = document.getElementById("result");
let scoreDisplay = document.getElementById("score");

// Step 2: Initialize scores
let playerScore = 0;
let computerScore = 0;

// Step 3: Function to get computer choice
function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3); // Random 0,1,2
    return choices[randomIndex];
}

// Step 4: Function to play one round
function playRound(playerChoice){
    let computerChoice = getComputerChoice(); // Get computer choice

    // Determine winner
    if(playerChoice === computerChoice){
        resultDisplay.innerText = `Draw! Both chose ${playerChoice}`;
    }
    else if(
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ){
        resultDisplay.innerText = `You Win! ${playerChoice} beats ${computerChoice}`;
        playerScore++; // Increase player score
    }
    else{
        resultDisplay.innerText = `You Lose! ${computerChoice} beats ${playerChoice}`;
        computerScore++; // Increase computer score
    }

    // Update score display
    scoreDisplay.innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Step 5: Add event listeners to buttons
rockBtn.addEventListener("click", function(){ playRound("Rock"); });
paperBtn.addEventListener("click", function(){ playRound("Paper"); });
scissorsBtn.addEventListener("click", function(){ playRound("Scissors"); });
