/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let alphabet = "qwertyuiopasdfghjklzxcvbnm1234567890"
    s = s.toLowerCase();
    let s_clear = "";
    for (let i = 0; i < s.length; i++) {
        if (alphabet.includes(s[i])) {
            s_clear += s[i];
        }
    }
    let s_clear_reversed = "";
    for (let i = s_clear.length - 1; i >= 0; i-- ) {
        s_clear_reversed += s_clear[i];
    }
    return s_clear === s_clear_reversed;
};