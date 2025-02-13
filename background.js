let isRunning = true;
async function openTabs() {
    while (isRunning) {
        chrome.tabs.create({ url: "https://www.google.com" });
        await new Promise(resolve => setTimeout(resolve, 1000)); // Opens every 2 seconds
    }
}
