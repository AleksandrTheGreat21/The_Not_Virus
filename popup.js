// JavaScript to open the Rick Roll video
function openRickRoll() {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

//John wait, does'nt JS not work in uncertified Chrome extensions?

document.getElementById("start").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "startOpeningTabs" });
});

