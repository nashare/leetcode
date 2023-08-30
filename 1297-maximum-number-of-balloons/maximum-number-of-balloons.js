/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let ballonDict = {
        "b": 0,
        "a": 0,
        "l": 0,
        "o": 0,
        "n": 0,
    }
    text.split("").forEach(l => {
        if (l in ballonDict) {
            ballonDict[l] += 1
        }
    })
    let freq = [ballonDict["b"], ballonDict["a"], 
                ballonDict["n"], Math.floor(ballonDict["o"]/2),
                Math.floor(ballonDict["l"] / 2)];
    let banMin = Math.min(...freq);
    return banMin;
};