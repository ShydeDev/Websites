const ytSkidButtons = document.getElementsByClassName("yt-skid-button");
let isSubscribed = false

for (const button of ytSkidButtons) {
    button.onclick = function () {
        isSubscribed = !isSubscribed
        button.style.backgroundColor = isSubscribed ? 'rgb(150, 150, 150)' : 'rgb(200, 0, 0)';
    }
}