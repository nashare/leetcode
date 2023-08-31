/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let numInt = BigInt(num.join(""));
    return String(numInt+BigInt(k)).split("")
};