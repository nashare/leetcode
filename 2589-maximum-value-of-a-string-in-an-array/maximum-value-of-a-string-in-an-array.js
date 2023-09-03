/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let result = [];
    strs.forEach(str => {
        let regMatch = str.match(/[0-9]/g);
        if (regMatch == null || regMatch.length < str.length) {
            result.push(str.length)
        } else {
            result.push(parseInt(str)) 
        }
    })
    return Math.max(...result);
};