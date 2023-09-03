/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let distinctStrDict = {};
    arr.forEach(el => {
        if (!(el in distinctStrDict)) {
            distinctStrDict[el] = 1;
        } else {
            distinctStrDict[el] += 1;
        }
    })
    let distinctStrArr = [];
    for (let key in distinctStrDict) {
        if (distinctStrDict[key] == 1) {
            distinctStrArr.push(key)
        }
    }
    let counter = 0;
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (distinctStrArr.includes(arr[i])) {
            counter += 1;
            if (counter == k) {
                result = arr[i];
                break;
            }
        }
    }
    return result;
};