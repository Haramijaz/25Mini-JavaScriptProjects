function updateClock() {

    // Step 1: Get current time
    let now = new Date();

    // Step 2: Get hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Step 3: Add 0 if number is less than 10
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Step 4: Combine them
    let time = hours + ":" + minutes + ":" + seconds;

    // Step 5: Show on screen
    document.getElementById("clock").innerText = time;
}

// Step 6: Run every 1 second
setInterval(updateClock, 1000);
