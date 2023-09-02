/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let paragraphArr = paragraph.split(/[,. ]/);
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let wordsFreq = {};
    paragraphArr.forEach(word => {
        if (word != "") {
            let wordClear = "";
            for (let i = 0; i < word.length; i++) {
                if (alphabet.includes(word[i])) {
                    wordClear += word[i].toLowerCase();
                }
            }
            if (!(wordClear in wordsFreq) && !(banned.includes(wordClear))) {
                wordsFreq[wordClear] = 1;
            } else if (!banned.includes(wordClear)) {
                wordsFreq[wordClear] += 1;
            }
        }
    })
    let wordsFreqValues = Object.values(wordsFreq);;
    let mostFrequent = Math.max(...wordsFreqValues);
    for (let key in wordsFreq) {
        if (wordsFreq[key] == mostFrequent) {
            return key;
        }
    }
};
