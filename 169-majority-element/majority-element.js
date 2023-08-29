/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let majNum = Math.ceil(nums.length / 2);
    let numsDict = {};
    let result;
    nums.forEach(el => {
        if (!(el in numsDict)) {
            numsDict[el] = 1;
        } else {
            numsDict[el] += 1;
        }
        if (numsDict[el] == majNum) {
            result =  el;
        }
    })
    return result;
};