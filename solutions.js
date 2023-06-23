// 258. Add Digits

var addDigits = function (num) {
    if (num < 10) {
        return num
    }
    while (num > 9) {
        let subresult = 0
        for (const digit of num.toString()) {
            subresult += parseInt(digit)
        }
        num = subresult
    }
    return num
};

// 1945. Sum of Digits of String After Convert

var getLucky = function (s, k) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let s_to_alph = ""
    for (let i = 0; i < s.length; i++) {
        s_to_alph += alphabet.indexOf(s[i]) + 1;
    }
    let result = s_to_alph;
    let c = 1;
    while (c <= k) {
        let subresult = 0
        const str_result = result.toString();
        for (let i = 0; i < str_result.length; i++) {
            subresult += parseInt(str_result[i])
        }
        result = subresult;
        c += 1;
    }
    return result
};