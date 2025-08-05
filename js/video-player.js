// Video Player Controls
const video = document.getElementById("mainVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const progressBar = document.getElementById("progressBar");
const progressFilled = document.getElementById("progressFilled");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");
const videoControls = document.getElementById("videoControls");
const loadingSpinner = document.getElementById("loadingSpinner");

// Format time helper
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

// Update progress bar
function updateProgress() {
  const progress = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${progress}%`;
  currentTimeDisplay.textContent = formatTime(video.currentTime);
  progressBar.setAttribute("aria-valuenow", Math.round(progress));
}

// Play/Pause functionality
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    playPauseBtn.setAttribute("aria-label", "Pause video");
  } else {
    video.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    playPauseBtn.setAttribute("aria-label", "Play video");
  }
});

// Click on progress bar to seek
progressBar.addEventListener("click", (e) => {
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const percentage = clickX / width;
  video.currentTime = percentage * video.duration;
});

// Video event listeners
video.addEventListener("loadedmetadata", () => {
  durationDisplay.textContent = formatTime(video.duration);
  loadingSpinner.style.display = "none";
});

video.addEventListener("timeupdate", updateProgress);

video.addEventListener("ended", () => {
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
  playPauseBtn.setAttribute("aria-label", "Play video");
});

// Show controls on hover or touch
let controlsTimeout;
const videoWrapper = document.querySelector(".video-wrapper");

videoWrapper.addEventListener("mouseenter", () => {
  videoControls.classList.add("show");
  clearTimeout(controlsTimeout);
});

videoWrapper.addEventListener("mouseleave", () => {
  if (!video.paused) {
    controlsTimeout = setTimeout(() => {
      videoControls.classList.remove("show");
    }, 2000);
  }
});

// Transcript toggle
const transcriptToggle = document.getElementById("transcriptToggle");
const transcriptContent = document.getElementById("transcriptContent");

transcriptToggle.addEventListener("click", () => {
  transcriptContent.classList.toggle("show");
  transcriptToggle.textContent = transcriptContent.classList.contains("show")
    ? "Hide Data"
    : "Show Data";
});

// Header scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Share functionality
document.getElementById("shareBtn").addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Fractal Color Patterns - Mathematical Art Visualization",
        text: "Check out these amazing fractal visualizations!",
        url: window.location.href,
      });
    } catch (err) {
      console.log("Share cancelled");
    }
  } else {
    // Fallback - copy to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  }
});

// Like functionality
let isLiked = false;
let likeCount = 8756; // Starting like count from metadata

document.getElementById("likeBtn").addEventListener("click", () => {
  const likeBtn = document.getElementById("likeBtn");
  
  if (!isLiked) {
    // Like the video
    isLiked = true;
    likeCount++;
    likeBtn.innerHTML = '<span>❤️</span> Liked';
    likeBtn.classList.add("liked");
    
    // Update the view count display if it exists
    const viewsElement = document.querySelector(".video-meta span:nth-child(3)");
    if (viewsElement) {
      viewsElement.textContent = `${likeCount.toLocaleString()} likes`;
    }
    
    // Show feedback
    console.log("Video liked! Total likes:", likeCount);
  } else {
    // Unlike the video
    isLiked = false;
    likeCount--;
    likeBtn.innerHTML = '<span>👍</span> Like Video';
    likeBtn.classList.remove("liked");
    
    // Update the view count display back to views
    const viewsElement = document.querySelector(".video-meta span:nth-child(3)");
    if (viewsElement) {
      viewsElement.textContent = `${likeCount.toLocaleString()} views`;
    }
    
    // Show feedback
    console.log("Video unliked! Total likes:", likeCount);
  }
});

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (e.target.tagName.toLowerCase() === "input") return;

  switch (e.key) {
    case " ":
    case "k":
      e.preventDefault();
      playPauseBtn.click();
      break;
    case "ArrowLeft":
      video.currentTime -= 10;
      break;
    case "ArrowRight":
      video.currentTime += 10;
      break;
    case "ArrowUp":
      video.volume = Math.min(1, video.volume + 0.1);
      break;
    case "ArrowDown":
      video.volume = Math.max(0, video.volume - 0.1);
      break;
    case "f":
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoWrapper.requestFullscreen();
      }
      break;
  }
});
