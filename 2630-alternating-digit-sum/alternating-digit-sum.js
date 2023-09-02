/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    const numArr = String(n).split("");
    let result = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (i%2 == 0) {
            result += parseInt(numArr[i])
        } else {
            result -= parseInt(numArr[i])
        }
    }
    return result;
};