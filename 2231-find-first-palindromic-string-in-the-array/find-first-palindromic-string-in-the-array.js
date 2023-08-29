/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    function isPalindtion(word) {
        let palindrom = "";
        for (let i = word.length - 1; i >= 0; i--) {
            palindrom += word[i]
        }
        return palindrom == word;
    }
    for (let i = 0; i < words.length; i++) {
        if (isPalindtion(words[i])) {
            return words[i]
        }
    }
    return ""
};