/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(" ");
    function wordReverse(word) {
        let result = "";
        for (let i = word.length - 1; i >= 0; i--) {
            result += word[i]
        }
        return result;
    }
    for (let i = 0; i < sArr.length; i++) {
        sArr[i] = wordReverse(sArr[i]);
    }
    return sArr.join(" ")
};