/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let resultArr = new Array(nums.length).fill(0);
    let odd = 1;
    let even = 0;
    nums.forEach(num => {
        if (num%2 == 0) {
            resultArr[even] = num;
            even += 2;
        } else {
            resultArr[odd] = num;
            odd += 2;
        }
    })
    return resultArr;
};