/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let columnsToDelete = 0;
    for (let i = 0; i < strs[0].length; i++) {
        let column = "a";
        for (let c = 0; c < strs.length; c++) {
            if (strs[c][i] < column[column.length - 1]) {
                columnsToDelete++;
                break;
            } else {
                column += strs[c][i]
            }
        }
    }
    return columnsToDelete;
};