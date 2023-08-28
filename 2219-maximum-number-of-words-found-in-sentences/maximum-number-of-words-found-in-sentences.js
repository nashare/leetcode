/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let result = 0;
    sentences.forEach(sentence => {
        let sentenceLen = sentence.split(" ").length;
        if (sentenceLen > result) {
            result = sentenceLen;
        }
    })
    return result;
};