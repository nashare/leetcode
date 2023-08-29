/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let result = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i+1; j < arr.length - 1; j++) {
            for (let k = j+1; k < arr.length; k++) {
                let aCond = Math.abs(arr[i] - arr[j]) <=a;
                let bCond = Math.abs(arr[j] - arr[k]) <=b;
                let cCond = Math.abs(arr[i] - arr[k]) <=c;
                if (aCond && bCond && cCond) {
                    result += 1
                }
            }
        }
    }
    return result;
};