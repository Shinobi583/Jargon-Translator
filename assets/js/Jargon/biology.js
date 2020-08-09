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
            let wordRegExp = new RegExp(word, 'gi');
            for (let k = 0; k < jargon.length; k++)
            {
                let val = jargonWords[jargon[k]];
                if (word === jargon[k])
                {
                    document.body.innerHTML = document.body.innerHTML.replace(wordRegExp, val);
                }
            }
        }

    }
}