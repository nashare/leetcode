/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    let textArr = text.split(" ");
    if (brokenLetters == "") {
        return textArr.length;
    }
    let brokenArr = brokenLetters.split("");
    let counter = 0;
    for (let i = 0; i < textArr.length; i++) {
        let regexFromMyArray = new RegExp(brokenArr.join("|"), 'gi');
        let regexMatch = textArr[i].match(regexFromMyArray);
        if (regexMatch == null) {
            counter++
        }
    }
    return counter;
};