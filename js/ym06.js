const pages = document.querySelectorAll(".page");
let current = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove("active");
  });
  if(index >= 0 && index < pages.length){
    pages[index].classList.add("active");
  }
}

document.querySelector(".next").addEventListener("click", ()=>{
  if(current < pages.length - 1) current++;
  showPage(current);
});

document.querySelector(".prev").addEventListener("click", ()=>{
  if(current > 0) current--;
  showPage(current);
});

// عرض أول صفحة
showPage(current);