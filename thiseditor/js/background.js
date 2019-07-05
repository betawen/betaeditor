chrome.browserAction.onClicked.addListener(function (tab) {
    console.log('back')
    chrome.tabs.create({ url: chrome.runtime.getURL('background.html') });
});
