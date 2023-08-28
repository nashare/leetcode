/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xStr = String(x);
    let reversed = xStr.split("").reverse().join("");
    if (xStr == reversed) {
        return true
    }
    return false
};