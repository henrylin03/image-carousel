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

function showPrevious(currentImageIndex) {
  if (currentImageIndex === 0) return;
  currentImageIndex--;
  console.log(currentImageIndex);
  show(currentImageIndex);
}

function showNext(currentImageIndex) {
  if (currentImageIndex === imagesCount - 1) return;
  currentImageIndex++;
  show(currentImageIndex);
}

leftBtn.addEventListener("mousedown", () => showPrevious(currentIdx));
rightBtn.addEventListener("mousedown", () => showNext(currentIdx));

show(currentIdx);

// todo: if already at the very left, disable button, and vice versa
