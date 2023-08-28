/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let subresult = command.replaceAll("(al)", "al");
    let result = subresult.replaceAll("()", "o");
    return result;
};