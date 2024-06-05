const images = document.querySelector(".images").children;
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

console.log(images);

// todo: if already at the very left, disable button, and vice versa

function showPrevious() {
  console.log("previous");
  return;
}

function showNext() {
  console.log("next");
  return;
}

leftBtn.addEventListener("mousedown", showPrevious);
rightBtn.addEventListener("mousedown", showNext);
