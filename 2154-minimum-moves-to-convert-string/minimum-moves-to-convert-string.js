/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let result = 0;
    let c = 0;
    while (c < s.length) {
        if (s[c] == "X") {
            result++;
            c += 3
        } else {
            c++
        }
    }
    return result
};