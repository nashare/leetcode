/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let change = [];
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] == 5) {
            change.push(5)
        } else if (bills[i] == 10) {
            change.sort((a, b) => a - b);
            if (change[0] != 5) {
                return false;
            } else {
                change = change.slice(1);
                change.push(10);
            }
        } else {
            change.sort((a, b) => a - b);
            if (change.includes(10) && change[0] == 5) {
                change = change.slice(1);
                const indexToDelete = change.indexOf(10);
                change.splice(indexToDelete, 1);
                change.push(20)
            } else if (change[0] == 5 && change[1] == 5 && change[2] == 5) {
                change = change.slice(3);
                change.push(20)
            } else {
                return false
            }
        }
    }
    return true
};