document.addEventListener("DOMContentLoaded", function ()
{
    document.getElementById("translate").addEventListener("click", onClick);

    function onClick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, "clicked");
            });
    }
});