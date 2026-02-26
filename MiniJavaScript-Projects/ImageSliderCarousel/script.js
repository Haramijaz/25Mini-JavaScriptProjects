// Step 1: Select all slides and buttons
let slides = document.querySelectorAll(".slide");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

let currentIndex = 0; // Track which slide is active

// Step 2: Function to show slide at given index
function showSlide(index){
    slides.forEach((slide) => slide.classList.remove("active")); // Hide all slides
    slides[index].classList.add("active"); // Show current slide
}

// Step 3: Show first slide initially
showSlide(currentIndex);

// Step 4: Next button click
nextBtn.addEventListener("click", function(){
    currentIndex++;
    if(currentIndex >= slides.length){
        currentIndex = 0; // Loop back to first slide
    }
    showSlide(currentIndex);
});

// Step 5: Prev button click
prevBtn.addEventListener("click", function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = slides.length - 1; // Go to last slide
    }
    showSlide(currentIndex);
});

// Step 6: Auto slide every 3 seconds
setInterval(function(){
    currentIndex++;
    if(currentIndex >= slides.length){
        currentIndex = 0;
    }
    showSlide(currentIndex);
}, 3000);
