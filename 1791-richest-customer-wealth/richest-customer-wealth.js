/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result = 0;
    accounts.forEach(customer => {
        let wealth = 0;
        for (let i = 0; i < customer.length; i++) {
            wealth += customer[i]
        }
        if (wealth > result) {
            result = wealth;
        }
    })
    return result;
};