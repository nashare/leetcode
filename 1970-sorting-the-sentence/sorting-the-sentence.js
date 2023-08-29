/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let sArr = s.split(" ");
    let resultArr = []
    for (let i = 1; i <= sArr.length; i++) {
        resultArr.push("")
    }
    sArr.forEach(el => {
        let index = el[el.length - 1] - 1;
        resultArr[index] = el.slice(0, -1)
    })
    return resultArr.join(" ");
};