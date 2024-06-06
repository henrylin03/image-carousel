const imagesViewer = document.querySelector(".images-viewer");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const navigationBtns = document.querySelector(".navigation").children;

const allImages = imagesViewer.children;
const imagesCount = allImages.length;
let currentIdx = 0;

function updateDisplay(idx) {
  const showImg = () => {
    if (idx < 0 || idx > imagesCount) return;
    imagesViewer.style.transform = `translateX(-${idx * 100}%)`;
  };

  const updateNav = () => {
    // clear 'selected' class from all children of nav buttons
  };

  // run
  showImg();
  updateNav();
}

function showPrevious() {
  if (currentIdx === 0) return;
  currentIdx--;
  updateDisplay(currentIdx);
}

function showNext() {
  if (currentIdx === imagesCount - 1) return;
  currentIdx++;
  updateDisplay(currentIdx);
}

leftBtn.addEventListener("mousedown", showPrevious);
rightBtn.addEventListener("mousedown", showNext);

// initialising
updateDisplay(currentIdx);

// todo: if already at the very left, disable button, and vice versa
