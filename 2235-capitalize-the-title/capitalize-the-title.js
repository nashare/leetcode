/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    let titleArr = title.split(" ");
    let resultArr = [];
    titleArr.forEach(word => {
        if (word.length <= 2) {
            resultArr.push(word.toLowerCase())
        } else {
            let wordLower = word.toLowerCase();
            let firstLetter = word[0];
            let wordToAdd = firstLetter.toUpperCase() + wordLower.slice(1);
            resultArr.push(wordToAdd)
        }
    })
    return resultArr.join(" ")
};