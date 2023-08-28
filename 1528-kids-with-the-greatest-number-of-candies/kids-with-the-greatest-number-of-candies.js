/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let greatest = candies[0];
    candies.forEach(candy => {
        if (candy > greatest) {
            greatest = candy;
        }
    });
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= greatest) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};