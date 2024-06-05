const images = document.querySelector(".images").children;
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

// #1: have a 'current' index of the image being shown
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
