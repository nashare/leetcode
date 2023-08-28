/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArr = s.split(" ");
    for (let i = sArr.length - 1; i >= 0; i--) {
        if (sArr[i] != "") {
            return sArr[i].length;
        }
    }
};