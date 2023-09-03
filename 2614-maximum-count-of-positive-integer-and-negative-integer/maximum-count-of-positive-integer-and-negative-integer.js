/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let positive = 0;
    let negative = 0;
    nums.forEach(num => {
        if (num > 0) {
            positive++;
        } else if (num < 0) {
            negative++;
        }
    })
    if (positive >= negative) {
        return positive;
    } else {
        return negative;
    }
};