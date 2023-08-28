/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let result = 0;
    items.forEach(item => {
        if ((ruleKey == "type" && ruleValue == item[0]) || (ruleKey == "color" && ruleValue == item[1]) || (ruleKey == "name" && ruleValue == item[2])) {
          result += 1  
        }
    })
    return result;
};