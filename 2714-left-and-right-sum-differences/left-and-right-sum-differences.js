/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let sum = 0;
    nums.forEach(el => {
        sum += el
    })
    nums.unshift(0);
    nums.push(0);
    let leftsum = 0;
    let rightsum = sum;
    let answer = [];
    for (let i = 1; i < nums.length - 1; i++) {
        leftsum += nums[i-1];
        rightsum -= nums[i];
        let toAnswer = Math.abs(leftsum - rightsum);
        answer.push(toAnswer)
    }
    return answer;
};