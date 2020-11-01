function addToPlaceholder(toAdd, el) {
    el.attr('placeholder', el.attr('placeholder') + toAdd);
    return new Promise(resolve => setTimeout(resolve, 100));
}

function clearPlaceholder(el) {
    el.attr("placeholder", "");
}

function printPhrase(phrase, el) {
    return new Promise(resolve => {
        clearPlaceholder(el);
        let letters = phrase.split('');
        letters.reduce(
            (promise, letter, index) => promise.then(_ => {
                if (index === letters.length - 1) {
                    setTimeout(resolve, 1000);
                }
                return addToPlaceholder(letter, el);
            }),
            Promise.resolve()
        );
    });
}

function printPhrases(phrases, el) {
    phrases.reduce(
        (promise, phrase) => promise.then(_ => printPhrase(phrase, el)),
        Promise.resolve()
    );
}

function run() {
    let phrases = [
        "Search Items e.g. \"Accessories\"",
        "Eng arzon maxsulotlar!!!",
        "Sale products for me))",
        "Search Items e.g. \"Black Friday\"",
        "What you need?",
        "Shopping is so strange :)"
    ];

    printPhrases(phrases, $('#search'));
}

run();