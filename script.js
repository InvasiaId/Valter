const bar = document.querySelector(".bar");
const navbar = document.querySelector(".navbar");

bar.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const heroTitle = document.querySelector(".hero-title");
    
heroTitle.addEventListener("animationend", (e) => {
  if (e.animationName === "typing") {
    heroTitle.style.borderRight = "none";
    heroTitle.style.opacity = "0";
        
    setTimeout(() => {
      heroTitle.style.color = "#BC6FF1"
      heroTitle.textContent = "Valter 2025"; 
      heroTitle.style.opacity = "1"; 
    }, 600); 
  }
});

let totalSeconds = 172800; 

const textPath = document.getElementById("countdownText");

function formatTime(sec) {
  const d = Math.floor(sec / (3600 * 24));
  const h = Math.floor((sec % (3600 * 24)) / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;

  const dd = String(d).padStart(2, "0");
  const hh = String(h).padStart(2, "0");
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");

  return `${dd}:${hh}:${mm}:${ss}`;
}

textPath.textContent = formatTime(totalSeconds);

const timer = setInterval(() => {
  totalSeconds--;
  textPath.textContent = formatTime(totalSeconds);

  if (totalSeconds <= 0) {
    clearInterval(timer);
    textPath.textContent = "SELESAI!";
  }
}, 1000);


const videoCard = document.getElementById("play-trailer");
const videoModal = document.getElementById("video-modal");
const closeModal = document.getElementById("close-modal");
const youtubeVideo = document.getElementById("youtube-video");

const baseVideoSrc = "https://www.youtube.com/embed/iILFBGm_I9M"; 

function playVideo() {
  youtubeVideo.src = baseVideoSrc + "?autoplay=1&enablejsapi=1";
}

function stopVideo() {
  youtubeVideo.src = "";
}

videoCard.addEventListener("click", () => {
  videoModal.style.display = "flex";
  playVideo();
});

closeModal.addEventListener("click", () => {
  videoModal.style.display = "none";
  stopVideo();
});

videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
    stopVideo();
  }
});