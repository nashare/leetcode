/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let heightToCompare = [...heights];
    let heightSorted = heights.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < heights.length; i++) {
        console.log(heights[i], heightToCompare[i]);
        if (heights[i] != heightToCompare[i]) {
            result++;
        }
    }
    return result;
};