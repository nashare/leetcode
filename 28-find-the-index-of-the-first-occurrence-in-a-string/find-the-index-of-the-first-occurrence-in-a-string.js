/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let subString = haystack.slice(i, i + needle.length);
        if (subString == needle) {
            return i
        }
    }
    return -1;
};