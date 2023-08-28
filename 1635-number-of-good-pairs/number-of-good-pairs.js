/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let c = i + 1; c < nums.length; c++) {
            if (nums[i] == nums[c]) {
                result += 1;
            }
        }
    }
    return result;
};