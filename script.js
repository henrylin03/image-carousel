const imagesViewer = document.querySelector(".images-viewer");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

// for clarity, use utility function to calculate whether it is -100% translateX on .images in css (index 1), -200% translateX for index 2 etc etc

// nb: it might be good to know how many total images there are at any given time
const allImages = imagesViewer.children;
const imagesCount = allImages.length;
let currentIdx = 0;

function show(idx) {
  if (idx < 0 || idx > imagesCount) return;
  imagesViewer.style.transform = `translateX(-${idx * 100}%)`;
  console.log(idx);
}

// displaying the image is as simple as just shifting the transform: translateX

function showPrevious() {
  if (currentIdx === 0) return;
  currentIdx--;
  console.log(currentIdx);
  show(currentIdx);
}

function showNext() {
  if (currentIdx === imagesCount - 1) return;
  currentIdx++;
  show(currentIdx);
}

leftBtn.addEventListener("mousedown", showPrevious);
rightBtn.addEventListener("mousedown", showNext);

show(currentIdx);

// todo: if already at the very left, disable button, and vice versa
