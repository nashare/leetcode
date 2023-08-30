/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    // I think there's a bug in this problem and my first solution is right.
    // First solution:

    // let sArr = s.split("");
    // let c = 0;
    // while (c <= sArr.length - 1) {
    //     if (sArr[c] == sArr[c+1]) {
    //         sArr.splice(c+1, 1);
    //     } else {
    //         c++
    //     }
    // }
    // return sArr.length;
    
    let sSet = new Set(s);
    return sSet.size;
};