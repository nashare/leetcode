/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let result = [0, 0]
    for (let i = 0; i < mat.length; i++) {
        let countOnes = 0;
        mat[i].forEach(num => {
            if (num == 1) {
                countOnes += 1;
            }
        })
        if (countOnes > result[1]) {
            result[0] = i;
            result[1] = countOnes
        }
    }
    return result;
};