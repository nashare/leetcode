/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let result = 0;
    let digitsArr = String(num).split("");
    digitsArr.forEach(digit => {
        if (num % parseInt(digit) == 0) {
            result += 1
        }
    })
    return result;
};