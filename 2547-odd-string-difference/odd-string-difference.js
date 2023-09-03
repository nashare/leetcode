/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    let alphbetDict = {
        "a": 0,
        "b": 1,
        "c": 2,
        "d": 3, 
        "e": 4,
        "f": 5,
        "g": 6,
        "h": 7,
        "i": 8, 
        "j": 9, 
        "k": 10,
        "l": 11,
        "m": 12,
        "n": 13, 
        "o": 14, 
        "p": 15,
        "q": 16,
        "r": 17,
        "s": 18, 
        "t": 19, 
        "u": 20,
        "v": 21,
        "w": 22,
        "x": 23, 
        "y": 24,  
        "z": 25
    }
    let diffDictionary = {};
    let diffWordDictionary = {};
    words.forEach(word => {
        let diffWordArr = [];
        for (let i = 0; i < word.length - 1; i++) {
            diffWordArr.push(alphbetDict[word[i+1]] - alphbetDict[word[i]]);
        }
        diffWordDictionary[diffWordArr] = word;
        if (!(diffWordArr in diffDictionary)) {
            diffDictionary[diffWordArr] = 1;
        } else {
            diffDictionary[diffWordArr] += 1;
        }
    })
    for (let key in diffDictionary) {
        if (diffDictionary[key] == 1) {
            return diffWordDictionary[key];
        }
    }
};