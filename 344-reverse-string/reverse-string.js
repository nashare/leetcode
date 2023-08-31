/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let range = Math.floor(s.length / 2);
    let right = s.length - 1;
    for (let i = 0; i < range; i++) {
        let replace = s[i];
        s[i] = s[right];
        s[right] = replace;
        right--;
    }
    return s;
};