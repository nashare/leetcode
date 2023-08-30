/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = []
    let firstLetterInd = alphabet.indexOf(s[0]);
    let secondLetterInd = alphabet.indexOf(s[3]);
    let firstDigit = parseInt(s[1]);
    let secondDigit = parseInt(s[4]);
    for (let c = firstLetterInd; c <= secondLetterInd; c++) {
        for (let i = firstDigit; i <= secondDigit; i++ ) {
            result.push(alphabet[c] + i)
        }
    }
    return result;
};