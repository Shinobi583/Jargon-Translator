document.addEventListener("DOMContentLoaded", function ()
{
    let select = document.getElementById("selection");
    document.getElementById("translate").addEventListener("click", onClick);

    function onClick() {
        let value = select.options[select.selectedIndex].value;

        chrome.runtime.sendMessage(value);
    }
});