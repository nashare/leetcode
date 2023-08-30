/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n == 1) {
        return true;
    }
    let result = 0;
    let number = 1;
    while (number < n) {
        number = 2**result;
        result += 1;
        if (number == n) {
            return true
        }
    }
    return false
};