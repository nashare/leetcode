/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let result = 0;
    hours.forEach(hour => {
        if (hour >= target) {
            result += 1
        }
    });
    return result;
};