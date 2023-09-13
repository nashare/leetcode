/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let squaresDict = {};
    while (n !== 1 && !squaresDict[n]) {
        squaresDict[n] = true;
        n = nSquared(n);
    }
    if (n == 1) {
        return true
    }
    return false
    function nSquared(n) {
        return String(n).split("").reduce(function (sum, num) {
            return sum + Math.pow(num, 2)
        }, 0);
    }
};