/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squared = [];
    nums.forEach(num => {
        squared.push(num*num);
    })
    squared.sort((a, b) => a - b);
    return squared;
};