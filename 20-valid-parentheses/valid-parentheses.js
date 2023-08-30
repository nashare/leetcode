/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let openClosed = {
        ")": "(",
        "]": "[",
        "}": "{",        
    }
    let openParenth = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
            openParenth.push(s[i]);
        } else {
            if (openClosed[s[i]] != openParenth[openParenth.length - 1]) {
                return false
            } else {
                openParenth.pop()
            }
        }
    }
    if (openParenth.length == 0) {
        return true
    } else {
        return false
    }
};