/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let result = nums[nums.length - 1]*nums[nums.length - 2] - nums[0]*nums[1];
    return result
};