/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let subArr = arr.slice(i+1);
        let subArrMax = Math.max(...subArr);
        arr[i] = subArrMax;
    }
    arr[arr.length - 1] = -1;
    return arr;
};