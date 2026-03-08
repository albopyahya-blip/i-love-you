const rain = document.getElementById("rain");

const hearts = ["❤️","💖","💗","💘","💞","💓"];

function createRain(){
  let span = document.createElement("span");
  span.innerText = hearts[Math.floor(Math.random()*hearts.length)];
  span.style.left = Math.random()*100 + "vw";
  span.style.fontSize = (Math.random()*30 + 15) + "px";
  span.style.animationDuration = (Math.random()*3 + 4) + "s";
  rain.appendChild(span);

  setTimeout(()=>{
    span.remove();
  },6000);
}

setInterval(createRain,200);