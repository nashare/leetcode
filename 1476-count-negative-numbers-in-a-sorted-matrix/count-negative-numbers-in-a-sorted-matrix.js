/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let negatives = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let c = 0; c < grid[i].length; c++) {
            if (grid[i][c] < 0) {
                negatives++;
            }
        }
    }
    return negatives;
};