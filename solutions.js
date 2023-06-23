// 258. Add Digits
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

var addDigits = function (num) {
    if (num < 10) {
        return num
    }
    while (num > 9) {
        let subresult = 0
        for (const digit of num.toString()) {
            subresult += parseInt(digit)
        }
        num = subresult
    }
    return num
};