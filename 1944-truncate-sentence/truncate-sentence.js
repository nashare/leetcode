/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let sArr = s.split(" ");
    return sArr.slice(0, k).join(" ");
};