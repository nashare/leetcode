/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let freqDict = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in freqDict) {
            freqDict[s[i]] += 1
            if (freqDict[s[i]] == 2) {
                return s[i]
            }
        } else {
            freqDict[s[i]] = 1
        }
    }
};