/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let c = 0;
    while (c < nums.length) {
        if (nums[c] == val) {
            nums.splice(c, 1);
        } else {
            c++;
        }
    }
    return nums.length;
};