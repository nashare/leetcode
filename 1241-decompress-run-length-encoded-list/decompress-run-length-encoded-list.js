/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length - 1; i+= 2) {
        for (let c = 1; c <= nums[i]; c++) {
            result.push(nums[i+1])
        }
    }
    return result;
};