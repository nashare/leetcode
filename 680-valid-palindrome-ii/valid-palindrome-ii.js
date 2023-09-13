/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    function isPalindrome(str) {
        let start = 0;
        let finish = str.length - 1;
        while (start <= finish) {
            if (str[start] != str[finish]) {
                return false;
            } else {
                start++;
                finish--;
            }
        }
        return true;
    }
    if (isPalindrome(s)) {
        return true;
    }
    let left = 0;
    let right = s.length - 1;
    let counter = 0;
    while (left <= right) {
        if (s[left] != s[right]) {
            let firstSubstring = s.substring(left + 1, right + 1);
            let secondSubstring = s.substring(left, right);
            if (isPalindrome(firstSubstring) || isPalindrome(secondSubstring)) {
                return true;
            } else {
                return false;
            }
        } else {
            left++;
            right--;
        }
    }
    return true;
}