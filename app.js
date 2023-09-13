const videoContainer = document.querySelector(".main-banner__video");
const video = document.querySelector(".main-banner__video video");
const videoBtn = document.querySelector(".videoBtn i");

videoBtn.classList.add("hidden");

console.log(video.paused);
const handleVideoPlay = () => {
  if (video.paused) {
    videoBtn.className = "fa-solid fa-pause";
    video.play();
  } else {
    videoBtn.className = "fa-solid fa-play";
    video.pause();
  }
};

const handleShowBtn = () => {
  videoBtn.classList.remove("hidden");
};

const handleHideBtn = () => {
  videoBtn.classList.add("hidden");
};
videoBtn.addEventListener("click", handleVideoPlay);
videoContainer.addEventListener("mouseover", handleShowBtn);
videoContainer.addEventListener("mouseleave", handleHideBtn);
