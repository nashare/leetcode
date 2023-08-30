/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let result = 0;
    let parenth = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            parenth.push("(");
        } else if (s[i] == ")") {
            if (parenth.length > result) {
                result = parenth.length
            }
            parenth.pop()
        }
    }
    return result;
};