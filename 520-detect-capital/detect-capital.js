/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let capitals = word.toUpperCase();
    let lowercase = word.toLowerCase();
    let firstCapital = word[0].toUpperCase() + lowercase.slice(1);
    if (word == capitals || word == lowercase || word == firstCapital) {
        return true
    }
    return false
};