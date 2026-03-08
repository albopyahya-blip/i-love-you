const targetDate = new Date("April 2, 2026 00:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if(diff <= 0){
    clearInterval(timerInterval);

    // إعادة تعيين الأرقام كلها للـ 0
    daysEl.innerText = "00";
    hoursEl.innerText = "00";
    minutesEl.innerText = "00";
    secondsEl.innerText = "00";

    // تحويل الصفحة تلقائيًا
    window.location.href = "index09.html";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.innerText = days.toString().padStart(2, "0");
  hoursEl.innerText = hours.toString().padStart(2, "0");
  minutesEl.innerText = minutes.toString().padStart(2, "0");
  secondsEl.innerText = seconds.toString().padStart(2, "0");
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();