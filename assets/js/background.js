chrome.runtime.onMessage.addListener(function (request, sender, sendResponse)
{
    if (request === "computer")
    {
        chrome.tabs.executeScript(null, {file: "./js/Jargon/computer-science.js"});
    }
    else
    {
        chrome.tabs.executeScript(null, {file: "./js/Jargon/biology.js"});
    }
});