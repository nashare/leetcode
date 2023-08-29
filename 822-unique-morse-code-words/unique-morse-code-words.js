/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let morseResults = [];
    words.forEach(word => {
        let morseWord = "";
        for (let i = 0; i < word.length; i++) {
            morseWord += morse[alphabet.indexOf(word[i])];
        }
        if (!morseResults.includes(morseWord)) {
            morseResults.push(morseWord);
        }
    })
    return morseResults.length;
};