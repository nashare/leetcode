/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let commonDict = {};
    for (let i = 0; i < list1.length; i++) {
        for (let c = 0; c < list2.length; c++) {
            if (list1[i] == list2[c]) {
                commonDict[list1[i]] = i + c;
            }
        }
    }
    const commonDictValues = Object.values(commonDict);
    commonDictValues.sort((a, b) => a - b);
    let result = [];
    for (const key in commonDict) {
        if (commonDict[key] == commonDictValues[0]) {
            result.push(key);
        }
    };
    return result;
};