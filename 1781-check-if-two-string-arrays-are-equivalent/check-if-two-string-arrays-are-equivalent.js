/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let w1 = "";
    let w2 = "";
    word1.forEach(word => {
        w1 += word
    })
    word2.forEach(word => {
        w2 += word
    })
    return w1 == w2;
};