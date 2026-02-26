const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const spaceCount = document.getElementById("spaceCount");
const warning = document.getElementById("warning");

textInput.addEventListener("input", function () {

    let text = textInput.value;

    // Character count
    charCount.textContent = text.length;

    // Word count
    let words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;

    // Space count
    let spaces = text.split(" ").length - 1;
    spaceCount.textContent = spaces;

    // Warning for limit
    if (text.length >= 200) {
        warning.textContent = "Character limit reached!";
    } else {
        warning.textContent = "";
    }

});
