/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let sArr = s.split("");
    let c = 0;
    while (c <= sArr.length - 1) {
        if (sArr[c] == sArr[c+1]) {
            sArr.splice(c, 2);
            if (c!=0) {
                c--;
            }
        }else {
            c++
        }
    }
    return sArr.join("");
};