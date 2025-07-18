// -------------------- BANNER ------------------------- //

var banners = [
  "assets/banner/banner1.png",
  "assets/banner/banner2.png"
];

var currentBannerIndex = 0;

function start() {
  const img = document.getElementById('imgId');
  img.src = banners[currentBannerIndex];
  img.style.opacity = 1;
  setTimeout(nextBanner, 7000);
}

function nextBanner() {
  const img = document.getElementById('imgId');
  img.style.opacity = 0.5;
  
  setTimeout(() => {
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    img.src = banners[currentBannerIndex];
    img.style.opacity = 1;
  }, 300);
  
  setTimeout(nextBanner, 7000);
}

window.onload = start;


// --------------------- TIMER ------------------------- //

var date = new Date("2025-09-13T13:30:00-03:00");

function getHorarioBrasilia() {
    const dataUTC = new Date();
    return new Date(dataUTC.getTime() - 3 * 60 * 60 * 1000);
}


function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
        const days = Math.floor(totalSeconds / 86400); 
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    
    const formatNumber = num => (num < 10 ? "0" : "") + num;
    
    return `${days} dias ${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

function updateTimer() {
    const diff = date - new Date();
    document.getElementById("timerId").innerText = diff > 0 
        ? formatTime(diff) 
        : "JÁ COMEÇOU!!!";
}

setInterval(updateTimer, 1000);

updateTimer();