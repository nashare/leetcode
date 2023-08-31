/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let letters = "";
    let digits = "";
    let allDigits = "1234567890"
    for (let i = 0; i < s.length; i++) {
        if (allDigits.includes(s[i])) {
            digits += s[i]
        } else {
            letters += s[i]
        }
    }
    let result = "";
    let lettersLength = letters.length;
    let digitsLength = digits.length;
    if (lettersLength == digitsLength) {
        for (let i = 0; i < lettersLength; i++) {
            result += letters[i];
            result += digits[i];
        }
    }
    if ((lettersLength > digitsLength) && (lettersLength - digitsLength == 1)) {
        for (let i = 0; i < digitsLength; i++) {
            result += letters[i];
            result += digits[i];
        }
        result += letters[lettersLength-1];
    }
    if ((digitsLength > lettersLength) && (digitsLength - lettersLength == 1)) {
        for (let i = 0; i < lettersLength; i++) {
            result += digits[i];
            result += letters[i];
        }
        result += digits[digitsLength-1];
    }
    return result;
};