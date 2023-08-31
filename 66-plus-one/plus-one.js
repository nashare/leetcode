/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let intFromArrPlusOne = BigInt(digits.join("")) + BigInt(1);
    return String(intFromArrPlusOne).split("");
};