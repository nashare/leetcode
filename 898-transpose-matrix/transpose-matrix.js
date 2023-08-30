/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let result = [];
    let c = 0;
    while (c < matrix[0].length) {
        let subresult = []
        for (let i = 0; i < matrix.length; i++) {
            subresult.push(matrix[i][c]);
        }
        result.push(subresult);
        c++;
    }
    return result;

};