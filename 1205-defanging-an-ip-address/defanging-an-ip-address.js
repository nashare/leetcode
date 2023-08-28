/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let result = address.replaceAll(".", "[.]");
    return result;
};