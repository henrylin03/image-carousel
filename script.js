const imagesViewer = document.querySelector(".images-viewer");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const navigationBtns = document.querySelector(".navigation").children;

const allImages = imagesViewer.children;
const imagesCount = allImages.length;
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

  showImg();
  updateNav();
  currentIdx = idx;
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

// todo: if already at the very left, disable button, and vice versa
