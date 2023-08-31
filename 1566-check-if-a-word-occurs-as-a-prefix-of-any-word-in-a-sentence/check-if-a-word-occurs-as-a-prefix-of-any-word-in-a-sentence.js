/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let sentArr = sentence.split(" ");
    for (let i = 0; i < sentArr.length; i++) {
        if (searchWord == sentArr[i].substring(0, searchWord.length)) {
            return i+1
        }
    }
    return -1;
};