/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];
    function isSelfDividing(num) {
        let numStr = String(num);
        let is = true;
        for (let i = 0; i < numStr.length; i++) {
            if (num%parseInt(numStr[i]) != 0) {
                is = false;
            }
        }
        return is
    }
    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            result.push(i)
        }
    }
    return result;
};