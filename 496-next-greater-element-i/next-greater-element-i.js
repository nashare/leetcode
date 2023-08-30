/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    function greaterEl(numInd, num) {
        let result = -1;
        for (let i = numInd + 1; i < nums2.length; i++) {
            if (nums2[i] > num) {
                result = nums2[i];
                break
            }   
        }
        return result;
    }
    nums1.forEach(num => {
        let numInd = nums2.indexOf(num);
        let grEl = greaterEl(numInd, num);
        result.push(grEl)
    })
    return result
};