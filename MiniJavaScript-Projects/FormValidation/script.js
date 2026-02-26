let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault(); // Stop form from submitting

    // Get values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Clear old errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Enter valid email";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    // If everything is correct
    if (isValid) {
        alert("Form Submitted Successfully ✅");
    }

});
