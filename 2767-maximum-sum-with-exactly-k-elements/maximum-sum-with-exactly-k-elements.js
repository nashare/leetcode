/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let el = Math.max(...nums);
    let result = 0;
    for (let i = 1; i <= k; i++) {
        result += el;
        el += 1;
    }
    return result;
};