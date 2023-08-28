/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    operations.forEach(el => {
        if (el==="--X" || el === "X--") {
            x--;
        } else {
            x++;
        }
    })
    return x;
};