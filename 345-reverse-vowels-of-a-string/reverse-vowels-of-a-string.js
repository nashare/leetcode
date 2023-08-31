/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let sArr = s.split("");
    let vowels = "aeiouAEIOU";
    let sVowels = "";
    for (let i = 0; i < sArr.length; i++) {
        if (vowels.includes(sArr[i])) {
            sVowels += sArr[i];
            sArr[i] = ""
        }
    }
    let vowelsReversed = [];
    for (let i = sVowels.length - 1; i >= 0; i--) {
        vowelsReversed.push(sVowels[i])
    }
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] == "") {
            sArr[i] = vowelsReversed[0];
            vowelsReversed.shift()
        }
    }
    return sArr.join("");
};