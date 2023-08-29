/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altGain = [0];
    let s = 0;
    gain.forEach(g => {
        s += g;
        altGain.push(s)
    })
    return Math.max(...altGain)
};