/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length - 1; i++ ) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                if (Math.abs(i - j) <= k) {
                    return true
                }
            }
        }
    }
    return false
};