let sentences = [
    "JavaScript is a powerful programming language",
    "Practice makes a person perfect",
    "Coding is fun when you understand logic",
    "Consistency is the key to success"
];

let timeLeft = 30;
let timer;
let started = false;

let sentenceText = document.getElementById("sentence");
let input = document.getElementById("input");
let timeText = document.getElementById("time");
let wpmText = document.getElementById("wpm");

function startTest() {

    // reset values
    timeLeft = 30;
    timeText.innerText = timeLeft;
    wpmText.innerText = 0;
    input.value = "";
    started = false;

    // random sentence
    let randomIndex = Math.floor(Math.random() * sentences.length);
    sentenceText.innerText = sentences[randomIndex];

    clearInterval(timer);
}

input.addEventListener("input", function() {

    if (!started) {
        started = true;
        timer = setInterval(countDown, 1000);
    }
});

function countDown() {

    timeLeft--;
    timeText.innerText = timeLeft;

    let wordsTyped = input.value.trim().split(" ").length;
    let wpm = Math.round((wordsTyped / (30 - timeLeft)) * 60);
    wpmText.innerText = wpm;

    if (timeLeft === 0) {
        clearInterval(timer);
        input.disabled = true;
        alert("Time's up! Your WPM: " + wpm);
    }
}
