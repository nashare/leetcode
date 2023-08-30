/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    let result = 0;
    let c = 0;
    function reverse(word) {
        let result = "";
        for (let i = word.length - 1; i >= 0; i--) {
            result += word[i]
        }
        return result
    }
    while (c < words.length) {
        let minusOne = false;
        for (let i = c+1; i < words.length; i++) {
            console.log(words[c], reverse(words[i]));
            if (words[c] == reverse(words[i])) {
                words.splice(c, 1);
                words.splice(i - 1, 1);
                result += 1;
                minusOne = true
                break
            }
        }
        c++
        if (minusOne) {
            c--;
        }
    }
    return result
}