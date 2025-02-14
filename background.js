let isRunning = true;
async function openTabs() {
    while (isRunning) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        await new Promise(resolve => setTimeout(resolve, 1000)); // Opens every 2 seconds
    }
}
