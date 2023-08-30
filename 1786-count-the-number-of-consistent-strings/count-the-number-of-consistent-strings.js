/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let result = 0;
    words.forEach(word => {
        let wordSet = new Set(word);
        let noDuplArr = Array(...wordSet);
        let add = true;
        for (let i = 0; i < noDuplArr.length; i++) {
            if (allowed.indexOf(noDuplArr[i]) == -1) {
                add = false;
                break;
            }
        }
        if (add) {
            result++;
        }
    })
    return result;
};