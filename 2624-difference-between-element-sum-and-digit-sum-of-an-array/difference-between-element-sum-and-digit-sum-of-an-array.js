/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elSum = 0;
    let digitSum = 0;
    nums.forEach(num => {
        elSum += num;
        if (num > 9) {
            let numArr = String(num).split("");
            numArr.forEach(digit => {
                digitSum += parseInt(digit)
            })
        } else {
            digitSum += num;
        }
    })
    let diff = elSum - digitSum;
    if (diff >= 0) {
        return diff;
    } else {
        return diff * -1;
    }
};