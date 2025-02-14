
chrome.action.onClicked.addListener(() => {
        while (true) {
            chrome.tabs.create({ url: "https://example.com" });
        }
                
});

