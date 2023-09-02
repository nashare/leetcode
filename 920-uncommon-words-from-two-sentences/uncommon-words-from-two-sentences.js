/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let words1Freq = {};
    let words2Freq = {};
    s1.split(" ").forEach(word => {
        if (!(word in words1Freq)) {
            words1Freq[word] = 1;
        } else {
            words1Freq[word] += 1;
        }
    })
    s2.split(" ").forEach(word => {
        if (!(word in words2Freq)) {
            words2Freq[word] = 1;
        } else {
            words2Freq[word] += 1;
        }
    })
    let result = [];
    for (let key in words1Freq) {
        if (words1Freq[key] == 1 && words2Freq[key] == undefined) {
            result.push(key);
        }
    }
    for (let key in words2Freq) {
        if (words2Freq[key] == 1 && words1Freq[key] == undefined) {
            result.push(key);
        }
    }
    return result;
};