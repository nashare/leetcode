/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let result = true;
    function digitCount(digit, num) {
        let result = 0;
        num.split("").forEach(el => {
            if (el == digit) {
                result += 1;
            }
        })
        return result;
    }
    for (let i = 0; i < num.length; i++) {
        if (digitCount(i, num) != num[i]) {
            return false;
        }
    }
    return true;
};