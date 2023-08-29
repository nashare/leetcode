/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for (let i = 2; i <= n - 2; i++) {
        let numToBase = n.toString(i);
        if (numToBase !== numToBase.split('').reverse().join('')) {
            return false;
        }
    }
    return true;
};