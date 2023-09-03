/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    let counter = 0;
    for (let i = 0; i < s.length - 2; i++) {
        let substring = s.substring(i, i + 3);
        if ((substring[0] != substring[1]) && (substring[0] != substring[2]) && (substring[1] != substring[2])) {
            counter++;
        }
    }
    return counter;
};