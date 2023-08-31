/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let digitArr = [];
    let digits = "1234567890"
    for (let i = 0; i < s.length; i++) {
        if (digits.includes(s[i])) {
            digitArr.push(s[i])
        }
    }
    let digitsSet = new Set(digitArr);
    digitArr = new Array(...digitsSet);
    digitArr.sort((a, b) => a - b);
    if (digitArr.length < 2) {
        return -1
    }
    return digitArr[digitArr.length - 2]
};