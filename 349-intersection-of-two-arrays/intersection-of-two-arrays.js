/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let c = 0; c < nums2.length; c ++) {
            if ((nums1[i] == nums2[c])&& !result.includes(nums1[i])) {
                result.push(nums1[i])
            }
        }
    }
    return result
};