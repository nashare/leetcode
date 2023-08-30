/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numsDict = {}
    nums.forEach(num => {
        if (num in numsDict) {
            numsDict[num] += 1
        } else {
            numsDict[num] = 1
        }
    })
    for (const key in numsDict) {
        if (numsDict[key] == 1) {
            return key
        }
    }
};