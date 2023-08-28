/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const uniqueSet = new Set(nums.sort(((a, b) => b - a)));
    if  (uniqueSet.size < 3) {
        return Math.max(...nums)
    } else {
        let count = 0
        let result;
        for (const el of uniqueSet) {
            if (count == 2) {
                result =  el;
                break;
            } else {
                count++;
            }
        }
        return result;
    }
};