const book = document.querySelector(".book");
let pages = Array.from(document.querySelectorAll(".page"));

// خلط الصور بطريقة صحيحة
for (let i = pages.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [pages[i], pages[j]] = [pages[j], pages[i]];
}

// إعادة ترتيب الصور داخل الـ book
pages.forEach(page => {
  book.insertBefore(page, document.querySelector(".buttons"));
});

// يبدأ بصورة عشوائية
let current = Math.floor(Math.random() * pages.length);

function showPage(index) {
  pages.forEach(page => page.classList.remove("active"));
  pages[index].classList.add("active");
}

document.querySelector(".next").addEventListener("click", ()=>{
  if(current < pages.length - 1) current++;
  showPage(current);
});

document.querySelector(".prev").addEventListener("click", ()=>{
  if(current > 0) current--;
  showPage(current);
});

// عرض أول صورة
showPage(current);