/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let arrSet = new Set(arr);
    let arrNoDuplicates = [...arrSet];
    arrNoDuplicates.sort((a, b) => a - b)
    console.log(arrNoDuplicates)
    let result = [];
    arr.forEach(el => {
        result.push(arrNoDuplicates.indexOf(el) + 1);
    })
    return result;
};