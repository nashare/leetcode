/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let subresult = 0;
        for (let c = 0; c < nums.length; c++) {
            if (nums[c] < nums[i]) {
                subresult += 1;
            }
        }
        result.push(subresult);
    }
    return result;
};