
function updateCountdown() {
    const countdownDisplay = document.getElementById('countdown');
    const newYear = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = newYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownDisplay.innerHTML = 
        days + "d " + 
        hours + "h " + 
        minutes + "m " + 
        seconds + "s ";

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        countdownDisplay.innerHTML = "Happy New Year!";
    }
}
const countdownInterval = setInterval(updateCountdown, 1000);
