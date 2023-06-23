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
    let sToAlph = ""
    for (let i = 0; i < s.length; i++) {
        sToAlph += alphabet.indexOf(s[i]) + 1;
    }
    let result = sToAlph;
    let c = 1;
    while (c <= k) {
        let subresult = 0
        const strResult = result.toString();
        for (let i = 0; i < strResult.length; i++) {
            subresult += parseInt(strResult[i])
        }
        result = subresult;
        c += 1;
    }
    return result
};

// 2180. Count Integers With Even Digit Sum

var countEven = function (num) {
    let counter = 0;
    for (let i = 1; i <= num; i++) {
        let digitsSum = 0;
        intToStr = i.toString()
        for (let c = 0; c < intToStr.length; c++) {
            digitsSum += parseInt(intToStr[c]);
        }
        if (digitsSum % 2 === 0) {
            counter += 1
        }
    }
    return counter;
};

console.log(countEven(4))