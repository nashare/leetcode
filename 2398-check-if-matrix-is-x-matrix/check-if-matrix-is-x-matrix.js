/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    let c = grid[0].length - 1;
    for (let i = 0; i < grid[0].length; i++) {
        if (grid[i][i] == 0 || grid[i][c] == 0) {
            return false;
        }
        for (let k = 0; k <  grid[0].length; k++) {
            if (k!= i && k != c) {
                if (grid[i][k] != 0) {
                    return false;
                }
            }
        }
        c--;
    }
    return true;
};