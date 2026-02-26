// Step 1: Select the toggle checkbox
let toggleBtn = document.getElementById("toggleBtn");

// Step 2: Load saved theme from localStorage
let currentTheme = localStorage.getItem("theme");
if(currentTheme === "dark"){
    document.body.classList.add("dark");
    toggleBtn.checked = true; // Toggle switch reflects current theme
}

// Step 3: Add event listener for toggle
toggleBtn.addEventListener("change", function(){

    document.body.classList.toggle("dark"); // Toggle dark class

    // Save preference
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
