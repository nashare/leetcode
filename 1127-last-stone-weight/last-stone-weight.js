/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length >= 2) {
        stones.sort((a, b) => a - b);
        let newStone = stones[stones.length - 1] - stones[stones.length - 2];
        stones = stones.slice(0, stones.length - 2);
        if (newStone != 0) {
            stones.push(newStone)
        }
    }
    if (stones.length == 0) {
        return 0
    } else {
        return stones[0]
    }
};