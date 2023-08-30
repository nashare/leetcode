/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let movesDict = {
        "L": 0,
        "R": 0,
        "U": 0,
        "D": 0
    }
    moves.split("").forEach(move => {
        movesDict[move] += 1;
    })
    if (movesDict["R"] == movesDict["L"] && movesDict["U"] == movesDict["D"]) {
        return true;
    } else {
        return false;
    }
};