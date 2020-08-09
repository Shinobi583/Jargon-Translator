csTranslate();

function csTranslate()
{
    const TEXT = document.querySelectorAll("h1, h2, h3, h4, h5, h6, span, a, p, li, td, caption");

    let jargonWords =
    {
        syntax: "rules of typing the language",
        paradigm: "way of thinking or doing",
        bandwidth: "amount of data that can be transmitted",
        refactoring: "modifying source code to improve it",
        algorithm: "list of instructions that solves a problem",
        parse: "transforming data in a more workable way",
        boilerplate: "collection of code snippets/assets that can be reused",
        library: "collection of files/functions that can be referenced",
        cdn: "content delivery network",
        git: "version control system to track changes",
        repository: "folder that contains all project files",
        repo: "shorthand for 'repository'",
        pseudocode: "solving a problem using human terms first"
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