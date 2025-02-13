let isRunning = false;

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "startOpeningTabs") {
        isRunning = true;
        openTabs();
    } 
}
async function openTabs() {
    while (isRunning) {
        chrome.tabs.create({ url: "https://www.google.com" });
        await new Promise(resolve => setTimeout(resolve, 1000)); // Opens every 2 seconds
    }
}
