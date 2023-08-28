/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    const nArr = String(n).split("");
    nArr.forEach(num => {
        product *= parseInt(num);
        sum += parseInt(num)
    })
    return product - sum;
};