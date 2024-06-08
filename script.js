const imagesViewer = document.querySelector(".images-viewer");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const navigationBtns = document.querySelector(".navigation").children;

const allImages = imagesViewer.children;
const imagesCount = allImages.length;
const idxOfLastImg = imagesCount - 1;
let currentIdx = 0;
let timeoutId;

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

  const autoPlaySlides = () => setTimeout(showNext, 5000);

  currentIdx = idx;
  showImg();
  updateNav();

  clearTimeout(timeoutId);
  if (idx !== idxOfLastImg) timeoutId = autoPlaySlides();
};

const showPrevious = () => {
  currentIdx--;
  console.log(currentIdx);
  updateDisplay(currentIdx);
};

const showNext = () => {
  currentIdx++;
  console.log(currentIdx);
  updateDisplay(currentIdx);
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
