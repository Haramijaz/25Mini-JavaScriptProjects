// Step 1: Select the password input field
let passwordInput = document.getElementById("password");

// Step 2: Select the paragraph where we will show strength message
let strengthMessage = document.getElementById("strengthMessage");

// Step 3: Add event listener to detect typing inside password field
passwordInput.addEventListener("input", function() {

    // Step 4: Get the current value of password field
    let password = passwordInput.value;

    // Step 5: Create a variable to store strength score
    let strength = 0;

    // Step 6: Check if password length is at least 6 characters
    if (password.length >= 6) {
        strength++;  // Increase strength score
    }

    // Step 7: Check if password contains at least one uppercase letter
    if (/[A-Z]/.test(password)) {
        strength++;  // Increase strength score
    }

    // Step 8: Check if password contains at least one number
    if (/[0-9]/.test(password)) {
        strength++;  // Increase strength score
    }

    // Step 9: Check if password contains special character
    if (/[!@#$%^&*]/.test(password)) {
        strength++;  // Increase strength score
    }

    // Step 10: Show message based on strength score

    if (strength === 0) {
        strengthMessage.innerText = "";
    }
    else if (strength === 1) {
        strengthMessage.innerText = "Weak Password ❌";
        strengthMessage.style.color = "red";
    }
    else if (strength === 2) {
        strengthMessage.innerText = "Medium Password ⚠";
        strengthMessage.style.color = "orange";
    }
    else if (strength === 3) {
        strengthMessage.innerText = "Strong Password 💪";
        strengthMessage.style.color = "blue";
    }
    else if (strength === 4) {
        strengthMessage.innerText = "Very Strong Password 🔥";
        strengthMessage.style.color = "green";
    }

});
