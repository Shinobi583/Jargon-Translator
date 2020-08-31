bioTranslate();

function bioTranslate()
{
    const TEXT = document.querySelectorAll("h1, h2, h3, h4, h5, h6, span, a, p, li, td, caption");

    let jargonWords =
    {
        aerobic: "Capable of surviving and growing in the presence of oxygen"
    }
    let jargon = Object.keys(jargonWords);

    translate(TEXT, jargon, jargonWords);
}

function translate(TEXT, jargon, jargonWords)
{
    for (let i = 0; i < TEXT.length; i++)
    {
        let element = TEXT[i];
        let allText = element.innerText.toLowerCase().split(" ");
        for (let j = 0; j < allText.length; j++)
        {
            let word = allText[j];
            for (let k = 0; k < jargon.length; k++)
            {
                let val = jargonWords[jargon[k]];
                if (word === jargon[k])
                {
                    let span = document.createElement("span");
                    let textNode = document.createTextNode(val);
                    span.appendChild(textNode);
                    let style = document.createAttribute("style");
                    style.value = "color: black; background: rgba(192, 232, 67, 0.8);";
                    span.setAttributeNode(style);
                    let wordIndex = element.innerText.indexOf(word);
                    let wordIndeces = wordIndex + word.length + 1;
                    let beginningText = element.innerText.substring(0, wordIndeces);
                    let endingText = element.innerText.substring(wordIndeces);
                    element.innerHTML = `${beginningText} ${span.outerHTML} ${endingText}`;
                }
            }
        }

    }
}