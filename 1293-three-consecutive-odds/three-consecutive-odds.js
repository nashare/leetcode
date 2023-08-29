/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    function odd(num) {
        return !(num % 2 == 0)
    }
    let c = 0; 
    while (c < arr.length - 2) {
        if (!odd(arr[c])) {
            c++;
        } else {
            if (!odd(arr[c + 1])) {
                c++
            } else {
                if (!odd(arr[c + 2])) {
                    c++
                } else {
                    return true
                }
            }
        }
    }
    return false
};