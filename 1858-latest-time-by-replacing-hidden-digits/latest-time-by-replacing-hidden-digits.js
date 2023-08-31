/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
    let timeArr = time.split("");
    if (time[0] == "?") {
        if (time[1] == "?" || time[1] < 4) {
            timeArr[0] = 2;
        } else {
            timeArr[0] = 1;
        }
    }
    if (time[1] == "?") {
        if (timeArr[0] == 2) {
            timeArr[1] = 3;
        } else {
            timeArr[1] = 9
        }
    }
    if (time[3] == "?") {
        timeArr[3] = 5;
    }
    if (time[4] == "?") {
        timeArr[4] = 9;
    }
    return timeArr.join("")
};