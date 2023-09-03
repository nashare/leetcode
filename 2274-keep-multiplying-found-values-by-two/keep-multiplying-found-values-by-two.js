/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] == original) {
            original *= 2;
            nums.splice(i, 1);
            i = 0;
        } else {
            i++;
        }
    }
    return original;
};