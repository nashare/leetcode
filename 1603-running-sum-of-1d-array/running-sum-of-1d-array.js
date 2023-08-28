/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        let subresult = 0
        for (let c = 0; c <= i; c++) {
            subresult += nums[c]
        }
        result.push(subresult);
    }
    return result;
};