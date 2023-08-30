/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let result = 0;
    let arrLengths = [];
    for (let i = 1; i <= arr.length; i += 2) {
        arrLengths.push(i)
    }
    arrLengths.forEach(num => {
        for (let c = 0; c < arr.length - num + 1; c += 1) {
            let subArr = arr.slice(c, c + num);
            console.log(subArr);
            let subresult = 0;
            subArr.forEach(n => {
                subresult += n
            })
            result += subresult;
        }
    })
    return result;
};