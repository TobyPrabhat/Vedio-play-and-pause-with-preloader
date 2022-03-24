function PlayVideo(){
  x = document.querySelector(".video-container");
  y = document.querySelector(".playButton");
  z = document.querySelector(".pauseButton");
  x.play();
  y.style.display = "none";
  z.style.display = "block";
}
function PauseVideo(){
  x = document.querySelector(".video-container");
  y = document.querySelector(".playButton");
  z = document.querySelector(".pauseButton");
  x.pause();
  y.style.display = "block";
  z.style.display = "none";
}

const preloader = document.querySelector(".preloader");
window.addEventListener("load", function(){
  preloader.classList.add("hide");
  preloader.classList.remove("preloader");
});