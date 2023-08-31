/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absence = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "A") {
            absence++;
            if (absence == 2) {
                return false
            }
        }
    }
    for (let i = 0; i <= s.length - 3; i++) {
        if (s.substring(i, i + 3) === "LLL") {
            return false;
        }
    }
    return true;
};