/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let result = [];
    let minRows = [];
    let maxColumns = []
    for (let i = 0; i < matrix.length; i++) {
        let min = Math.min(...matrix[i]);
        minRows.push(min)
    }
    for (let i = 0; i < matrix[0].length; i++) {
        let column = [];
        for (let c = 0; c < matrix.length; c++) {
            column.push(matrix[c][i])
        }
        let max = Math.max(...column);
        maxColumns.push(max)

    }
    for (let i = 0; i < minRows.length; i++) {
        for (let c = 0; c < maxColumns.length; c++) {
            if (minRows[i] == maxColumns[c]) {
                result.push(minRows[i])
            }
        }
    }
    return result;
};