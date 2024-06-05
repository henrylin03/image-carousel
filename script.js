const imagesViewer = document.querySelector(".images-viewer");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const allImages = imagesViewer.children;
const imagesCount = allImages.length;
let currentIdx = 0;

// run
leftBtn.addEventListener("mousedown", showPrevious);
rightBtn.addEventListener("mousedown", showNext);

show(currentIdx);

// event handlers
function show(idx) {
  if (idx < 0 || idx > imagesCount) return;
  imagesViewer.style.transform = `translateX(-${idx * 100}%)`;
  console.log(idx);
}

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

function disableBtnsAtEnds() {
  // if we're at the end of one side or another, it becomes disabled
  // this might be an event listener maybe?
}

// TODO: update nav (bottom) display
// TODO: fix bug on smaller screens where the images display very oddly - i think this has to do with the width of .carousel!

// todo: if already at the very left, disable button, and vice versa
