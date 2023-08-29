/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let result = 0;
    let prefLen = pref.length;
    for (let i = 0; i < words.length; i++) {
        if (words[i].slice(0, prefLen) == pref) {
            result += 1
        }
    }
    return result;
};