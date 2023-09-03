/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    let bulky = false;
    let heavy = false;
    if ((length * width * height >= 10**9) || (length >= 10**4 || width >= 10**4 || height >= 10 **4)) {
        bulky = true;
    }
    if (mass >= 100) {
        heavy = true;
    }
    if (heavy && bulky) {
        return "Both"
    } else if (!heavy && !bulky) {
        return "Neither"
    } else if (bulky && !heavy) {
        return "Bulky"
    } else if (heavy && !bulky) {
        return "Heavy"
    }
};