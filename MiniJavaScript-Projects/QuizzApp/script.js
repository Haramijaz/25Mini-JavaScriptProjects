// Questions
let questions = [
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "Capital of Pakistan?",
        answers: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
        correct: "Islamabad"
    },
    {
        question: "HTML stands for?",
        answers: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Making Language",
            "High Text Machine Language"
        ],
        correct: "Hyper Text Markup Language"
    }
];

let currentQuestion = 0;
let score = 0;

let questionText = document.getElementById("question");
let answersDiv = document.getElementById("answers");
let nextBtn = document.getElementById("nextBtn");
let resultText = document.getElementById("result");

function loadQuestion() {

    answersDiv.innerHTML = "";
    let q = questions[currentQuestion];

    questionText.innerText = q.question;

    q.answers.forEach(answer => {

        let btn = document.createElement("button");
        btn.innerText = answer;

        btn.onclick = function() {
            checkAnswer(btn, answer);
        };

        answersDiv.appendChild(btn);
    });
}

function checkAnswer(button, answer) {

    let correctAnswer = questions[currentQuestion].correct;

    if (answer === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    // disable all buttons after click
    let allButtons = answersDiv.querySelectorAll("button");
    allButtons.forEach(btn => btn.disabled = true);
}

nextBtn.onclick = function() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    questionText.innerText = "Quiz Finished!";
    answersDiv.innerHTML = "";
    nextBtn.style.display = "none";
    resultText.innerText = "Your Score: " + score + " / " + questions.length;
}

loadQuestion();
