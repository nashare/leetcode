/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    nums.sort((a, b) => b - a);
    let max = nums[0];
    let min = nums[nums.length-1];
    for (let c = min; c >= 1; c--) {
        if (max % c == 0 && min % c == 0) {
            return c
        }
    }
};