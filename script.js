const imagesViewer = document.querySelector(".images-viewer");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const navigationBtns = document.querySelector(".navigation").children;

const allImages = imagesViewer.children;
const imagesCount = allImages.length;
let currentIdx = 0;

function showImg(idx) {
  if (idx < 0 || idx > imagesCount) return;
  imagesViewer.style.transform = `translateX(-${idx * 100}%)`;
}

function showPrevious() {
  if (currentIdx === 0) return;
  currentIdx--;
  showImg(currentIdx);
}

function showNext() {
  if (currentIdx === imagesCount - 1) return;
  currentIdx++;
  showImg(currentIdx);
}

leftBtn.addEventListener("mousedown", showPrevious);
rightBtn.addEventListener("mousedown", showNext);

showImg(currentIdx);

// todo: if already at the very left, disable button, and vice versa
