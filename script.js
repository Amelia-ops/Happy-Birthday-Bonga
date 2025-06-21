const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

// 🎯 Target date: Midnight on June 23, 2025
const targetDate = new Date('June 23, 2025 00:00:00').getTime();

const timerInterval = setInterval(timer, 1000);

function timer() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(timerInterval);

    Days.innerHTML = '00';
    Hours.innerHTML = '00';
    Minutes.innerHTML = '00';
    Seconds.innerHTML = '00';

    // 🎉 Trigger confetti when time ends
    confetti({
      particleCount: 360,
      spread: 360,
      origin: { y: 0.6 },
      zIndex: 9999
    });

    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  Days.innerHTML = String(days).padStart(2, '0');
  Hours.innerHTML = String(hours).padStart(2, '0');
  Minutes.innerHTML = String(minutes).padStart(2, '0');
  Seconds.innerHTML = String(seconds).padStart(2, '0');
}