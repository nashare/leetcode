/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result = 0;
    nums.forEach(num => {
        if (String(num).length % 2 == 0) {
            result++
        }
    })
    return result
};