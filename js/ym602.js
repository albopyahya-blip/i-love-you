function unlock() {
  const pw = document.getElementById("password").value;
  const error = document.getElementById("error");

  const correctPasswords = ["I love maloktyyy", "i love maloktyyy", "I love you", "love", "i love you"];

  if (correctPasswords.includes(pw)) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
  } else {
    error.textContent = "Wrong password maloktyyy 👀";
  }
}

const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

/* دعم الموبايل + منع أخطاء التشغيل */
playBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();   // لازم يكون بسبب click مباشر (مناسب للموبايل)
      playBtn.textContent = "🔓";
    } else {
      music.pause();
      playBtn.textContent = "🔒";
    }
  } catch (error) {
    console.log("Audio error:", error);
  }
});