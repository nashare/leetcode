/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sArr = s.split("").sort();
    const tArr = t.split("").sort();    
    return sArr.every((element, index) => element === tArr[index]);
};