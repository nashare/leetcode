/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
    let diagonalValues = [];
    let c = nums[0].length - 1;
    for (let i = 0; i < nums[0].length; i++) {
        diagonalValues.push(nums[i][i]);
        diagonalValues.push(nums[i][c]);
        c--;
    }
    diagonalValues.sort((a, b) => b - a);
    function isPrime(num) {
        if (num == 1) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true;
    }
    for (let i = 0; i < diagonalValues.length; i++) {
        if (isPrime(diagonalValues[i])) {
            return diagonalValues[i]
        }
    }
    return 0
};
