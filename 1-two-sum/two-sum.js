/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let c = i+1; c < nums.length; c++) {
            if (nums[i] + nums[c] == target) {
                return [i, c]
            }
        }
    }

};