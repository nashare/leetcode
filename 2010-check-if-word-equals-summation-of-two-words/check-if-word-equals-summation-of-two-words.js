/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let firstToNum = "";
    let secondToNum = "";
    let thirdToNum = "";
    for (let i = 0; i < firstWord.length; i++) {
        firstToNum += alphabet.indexOf(firstWord[i])
    }
    for (let i = 0; i < secondWord.length; i++) {
        secondToNum += alphabet.indexOf(secondWord[i])
    }
    for (let i = 0; i < targetWord.length; i++) {
        thirdToNum += alphabet.indexOf(targetWord[i])
    }
    return (parseInt(firstToNum) + parseInt(secondToNum) == parseInt(thirdToNum))
};