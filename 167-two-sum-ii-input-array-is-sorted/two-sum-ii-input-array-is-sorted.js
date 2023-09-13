/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let numsDict = {};
    for (let i = 0; i < numbers.length; i++) {
        const n = numbers[i];
        if (target - n in numsDict) {
            return [numsDict[target - n] + 1, i + 1]
        } else {
            numsDict[n] = i;
        }
    }
};