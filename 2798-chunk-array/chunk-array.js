/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
    let result = [];
    let remainderSize = arr.length % size;
    let arrayToAdd = [];
    if (remainderSize != 0) {
        arrayToAdd = arr.slice(arr.length - remainderSize)
    }
    for (let i = 0; i < arr.length - remainderSize; i+= size) {
        result.push(arr.slice(i, i+size))
    }
    if (arrayToAdd.length > 0) {
        result.push(arrayToAdd)
    }
    return result
};