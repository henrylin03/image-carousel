const images = document.querySelector(".images").children;
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

// for clarity, use utility function to calculate whether it is -100% translateX on .images in css (index 1), -200% translateX for index 2 etc etc

// nb: it might be good to know how many total images there are at any given time
console.log(images.length);

// displaying the image is as simple as just shifting the transform: translateX

let currentIdx = 0;

function show() {}

function showPrevious() {
  if (currentIdx === 0) return;
  currentIdx--;
  console.log(currentIdx);
  return;
}

function showNext() {
  if (currentIdx === images.length - 1) return;
  currentIdx++;
  console.log(currentIdx);
  return;
}

leftBtn.addEventListener("mousedown", showPrevious);
rightBtn.addEventListener("mousedown", showNext);

// todo: if already at the very left, disable button, and vice versa
