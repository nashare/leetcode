/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let result = 0;
    let vowels = "aeiou"
    for (let i = left; i <= right; i++) {
        if (vowels.indexOf(words[i][0]) != -1 && vowels.indexOf(words[i][words[i].length-1]) != -1) {
            result += 1;
        }
    }
    return result;
};