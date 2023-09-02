/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let result = [];
    nums.forEach(num => {
        String(num).split("").forEach(digit => {
            result.push(digit)
        })
    })
    return result;
};