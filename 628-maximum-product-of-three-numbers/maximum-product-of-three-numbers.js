/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);
    let numsLen = nums.length;
    if (nums[0] < 0 && nums[1] < 0 && nums[numsLen - 1] > 0) {
        if ((nums[0] * nums[1]) > (nums[numsLen - 2] * nums[numsLen - 3])) {
            return nums[numsLen - 1] * nums[0] * nums[1];
        }

    }
    return nums[numsLen - 1] * nums[numsLen - 2] * nums[numsLen - 3];
};