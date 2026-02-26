let selectedRating = 0;

function rate(number) {

    selectedRating = number;

    let stars = document.querySelectorAll(".stars span");

    stars.forEach((star, index) => {

        if (index < number) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }

    });

    document.getElementById("result").innerText = "Rating: " + number;
}

function submitRating() {

    if (selectedRating === 0) {
        alert("Please select a rating first ⭐");
    } else {
        alert("Thank you! You rated us " + selectedRating + " stars ⭐");
    }
}
