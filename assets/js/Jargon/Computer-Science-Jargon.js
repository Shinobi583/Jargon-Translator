chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    translate();
});

const text = document.querySelectorAll("h1, h2, h3, h4, h5, h6, span, a, p, li, td, caption");

let jargonWords =
{
    syntax: "rules of typing the language",
    paradigm: "way of thinking or doing",
    bandwidth: "amount of data that can be transmitted"
}
let jargon = Object.keys(jargonWords);

function translate()
{
    for (let i = 0; i < allText.length; i++)
    {
        let word = allText[i];
        let wordRegExp = new RegExp(word, 'gi');
        for (let j = 0; j < jargon.length; j++)
        {
            let val = jargonWords[jargon[j]];
            if (allText[i] === jargon[j])
            {
                document.body.innerHTML = document.body.innerHTML.replace(wordRegExp, val);
            }
        }
    }
}