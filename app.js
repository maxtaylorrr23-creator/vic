const home = document.getElementById("home");
const licence = document.getElementById("licence");
const refreshTime = document.getElementById("refreshTime");

function openLicence() {
  home.classList.remove("active");
  licence.classList.remove("off-right");
  licence.classList.add("active");
  updateRefreshTime();
}

function goHome() {
  licence.classList.remove("active");
  licence.classList.add("off-right");
  home.classList.add("active");
}

function updateRefreshTime() {
  const now = new Date();
  const date = now.toLocaleDateString("en-AU");
  const time = now.toLocaleTimeString("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  refreshTime.textContent = `Last refreshed ${date} at ${time}`;
}

/* PWA */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
