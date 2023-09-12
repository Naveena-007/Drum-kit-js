window.addEventListener("keydown", (event) => {
  let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  console.log(audio);
  console.log(key);
  if (!audio) return `Sorry! Audio is Not Found`;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("played");
});

function removeTransition(e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("played");
}

let keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
