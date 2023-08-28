/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let result = 0;
    for (let i = 0; i < jewels.length; i++) {
        for (let c = 0; c < stones.length; c++) {
            if (jewels[i] === stones[c]) {
                result++;
            }
        }
    }
    return result;
};