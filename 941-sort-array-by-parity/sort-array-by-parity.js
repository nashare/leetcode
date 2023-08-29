/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i]%2 == 0) {
            nums.unshift(nums[i]);
            nums.splice(i+1, 1);
        }
    }
    return nums;
};