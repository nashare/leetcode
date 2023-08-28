/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let result = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let c = i + 1; c < nums.length; c++) {
            if (nums[i] + nums[c] < target) {
                result += 1;
            }
        }
    }
    return result;
};