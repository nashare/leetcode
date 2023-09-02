/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    let numArr = String(num).split("");
    numArr.sort((a, b) => (a - b));
    let result = parseInt(numArr[0]) * 10 + parseInt(numArr[1]) * 10 + parseInt(numArr[2]) + parseInt(numArr[3]);
    return result;
};