/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let subS = "";
    for (let i = 0; i < words.length; i++) {
        subS += words[i];
        if (subS == s) {
            return true
        }
    }
    return false
};