/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
    let evenVal = [];
    let oddVal = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            evenVal.push(nums[i])
        } else {
            oddVal.push(nums[i])
        }
    }
    evenVal.sort((a, b) => a - b);
    oddVal.sort((a, b) => b - a);
    for (let i = 0; i < evenVal.length; i++) {
        if (evenVal[i]) {
            result.push(evenVal[i]);
        }
        if (oddVal[i]) {
            result.push(oddVal[i]);
        }
    }
    return result;
};
