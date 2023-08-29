/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let sDict = {};
    s.split("").forEach(letter => {
        if (!(letter in sDict)) {
            sDict[letter] = 1;
        } else {
            sDict[letter] += 1;
        }
    })
    let dictValues = new Set(Object.values(sDict));
    if (dictValues.size == 1) {
        return true;
    } else {
        return false;
    }
};