/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numsDict = {};
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (target - n in numsDict) {
            return [i, numsDict[target - n]]
        } else {
            numsDict[n] = i;
        }
    }
};