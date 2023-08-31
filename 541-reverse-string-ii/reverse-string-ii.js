/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    function wordReverse(word) {
        let result = "";
        for (let i = word.length - 1; i >= 0; i--) {
            result += word[i]
        }
        return result;
    }
    let reminder = s.length % (2*k);
    let reminderToAdd = "";
    if (reminder != 0) {
        let remainingStr = s.substring(s.length - reminder);
        if (remainingStr.length < k) {
            reminderToAdd = wordReverse(remainingStr)
        } else {
            let remainderToReverse = remainingStr.substring(0, k);
            let remainderDoNotReverse = remainingStr.substring(k);
            reminderToAdd = wordReverse(remainderToReverse) + remainderDoNotReverse;
        }
    }
    let result = "";
    for (let i = 0; i < s.length - reminder; i += 2*k) {
        let subresult = wordReverse(s.substring(i, i+k)) + s.substring(i+k, i+k+k);
        result += subresult;
    }
    result += reminderToAdd;
    return result;
};