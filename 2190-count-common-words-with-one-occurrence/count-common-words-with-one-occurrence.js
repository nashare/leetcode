/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    let words1Freq = {};
    let words2Freq = {};
    words1.forEach(word => {
        if (!(word in words1Freq)) {
            words1Freq[word] = 1;
        } else {
            words1Freq[word] += 1;
        }
    })
    words2.forEach(word => {
        if (!(word in words2Freq)) {
            words2Freq[word] = 1;
        } else {
            words2Freq[word] += 1;
        }
    })
    let result = 0;
    for (let key in words1Freq) {
        if (words1Freq[key] == 1 && words2Freq[key] == 1) {
            result++;
        }
    }
    return result;
};