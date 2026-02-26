// Loader
window.onload = function() {
  document.getElementById("loader").style.display = "none";
};

// Typing Effect
const texts = ["Web Developer", "JavaScript Enthusiast", "Creative Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
    }, 1500);
  }

  setTimeout(type, 100);
})();
