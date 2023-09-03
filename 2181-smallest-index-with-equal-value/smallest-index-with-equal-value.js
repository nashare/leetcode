/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    let result = -1;
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 == nums[i]) {
            result = i;
            break;
        }
    }
    return result;
};