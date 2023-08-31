/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    let monthDays = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    function isLeap(year) {
        if (year % 400 == 0) {
            return true
        }
        if (year % 100 == 0) {
            return false
        }
        if (year % 4 == 0) {
            return true
        }
        return false;
    }
    let month = parseInt(date.substring(5, 7))
    let day = parseInt(date.substring(8))
    let year = parseInt(date.substring(0, 5))
    let result = 0;
    for (let i = 1; i < month; i++) {
        result += monthDays[i]
    }
    result += day;
    if (isLeap(year) && (month >= 3)) {
        result++
    }
    return result;
};
