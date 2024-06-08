const imagesViewer = document.querySelector(".images-viewer");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const navigationBtns = document.querySelector(".navigation").children;

const allImages = imagesViewer.children;
const imagesCount = allImages.length;
const idxOfLastImg = imagesCount - 1;
let currentIdx = 0;

const updateDisplay = (idx) => {
  const showImg = () => {
    if (idx < 0 || idx > imagesCount) return;
    imagesViewer.style.transform = `translateX(-${idx * 100}%)`;
  };

  const updateNav = () => {
    const selectedBtn = document.querySelector(".navigation .selected");
    if (selectedBtn) selectedBtn.classList.remove("selected");
    navigationBtns[idx].classList.add("selected");
  };

  currentIdx = idx;
  showImg();
  updateNav();
  disableArrowBtnsAtEnds();
};

const showPrevious = () => {
  if (currentIdx === 0) return;
  currentIdx--;
  updateDisplay(currentIdx);
};

const showNext = () => {
  if (currentIdx === imagesCount - 1) return;
  currentIdx++;
  updateDisplay(currentIdx);
};

const disableArrowBtnsAtEnds = () => {
  if (currentIdx === 0) return (leftBtn.disabled = true);
  if (currentIdx === idxOfLastImg) return (rightBtn.disabled = true);
  leftBtn.disabled = false;
  rightBtn.disabled = false;
};

// event listeners
leftBtn.addEventListener("mousedown", showPrevious);
rightBtn.addEventListener("mousedown", showNext);
document.addEventListener("keydown", (e) => {
  const callback = {
    ArrowLeft: showPrevious,
    ArrowRight: showNext,
  }[e.key];
  callback?.();
});
[...navigationBtns].forEach((btn, idx) =>
  btn.addEventListener("mousedown", () => updateDisplay(idx))
);

// initialising
updateDisplay(currentIdx);
