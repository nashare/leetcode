/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let result = 0;
    let c = mat[0].length - 1;
    for (let i = 0; i < mat[0].length; i++) {
        result += mat[i][i]
        if (i != c) {
            result += mat[i][c]
        }
        c--;
    }
    return result;
};