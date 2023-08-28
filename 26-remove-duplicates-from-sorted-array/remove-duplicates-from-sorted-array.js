/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let c = 1;
    while (c < nums.length) {
        if (nums[c]==nums[c-1]) {
            nums.splice(c, 1)
        } else {
            c++
        }
    }
    return nums.length;
};