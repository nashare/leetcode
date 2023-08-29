/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = ""
    for (let i = 0; i < strs[0].length; i++) {
        let letter = strs[0][i];
        let add = true;
        for (let c = 1; c < strs.length; c++) {
            if (i > strs[c].length+1) {
                add = false;
                break
            } else {
                if (strs[c][i] != letter) {
                    add = false;
                    break
                }
            }
        }
        if (add == true) {
            prefix += letter
        } else {
            return prefix;
        }
    }
    return prefix;
};