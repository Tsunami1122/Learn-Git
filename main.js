
const timeLeft = document.getElementById('second-left');
console.log(timeLeft);
const countdown = setInterval(() => {
    const now = new Date();
    const newYear = new Date('2025-01-01');

    const difference = newYear - now;

    timeLeft.innerHTML = `${Math.floor(difference/1000)}`;
}, 1000);