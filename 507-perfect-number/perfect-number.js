/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    var selfDividingNumbers = function(num) {
        let result = [];
        for (let i = 1; i < num; i++) {
            if (num % i == 0) {
                result.push(i)
            }
        }
        return result;
    };
    let divisors = selfDividingNumbers(num);
    let sum = 0;
    divisors.forEach(el => {
        sum += el;
    })
    return num == sum;
};