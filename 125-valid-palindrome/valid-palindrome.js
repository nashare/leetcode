/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let end = s.length - 1;
    const alphNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let sCleared = "";
    for (let i = 0; i < s.length; i++) {
        if (alphNum.includes(s[i])) {
            sCleared += s[i].toLowerCase();
        }
    }
    let start = 0;
    let finish = sCleared.length - 1;
    while (start <= finish) {
        if (sCleared[start] != sCleared[finish]) {
            return false;
        } else {
            start++;
            finish--;
        }
    }
    return true;
};