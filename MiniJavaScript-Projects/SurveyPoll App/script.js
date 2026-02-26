const form = document.getElementById("pollForm");
const resultDiv = document.getElementById("result");

let votes = {
  JavaScript: 0,
  Python: 0,
  Java: 0,
  "C++": 0
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const selected = document.querySelector('input[name="poll"]:checked');

  if (!selected) {
    alert("Please select an option!");
    return;
  }

  const value = selected.value;
  votes[value]++;

  showResults();
});

function showResults() {
  let output = "<h3>Results:</h3>";

  for (let key in votes) {
    output += `${key}: ${votes[key]} votes<br>`;
  }

  resultDiv.innerHTML = output;
}
