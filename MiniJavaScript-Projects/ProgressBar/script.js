let progress = 0;

function increase() {

    if (progress < 100) {
        progress += 10;
    }

    document.getElementById("progress").style.width = progress + "%";
    document.getElementById("percent").innerText = progress + "%";
}
