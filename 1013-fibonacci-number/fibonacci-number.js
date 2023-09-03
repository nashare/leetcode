/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let fib = [0, 1];
    if (n <= 1) {
        return fib[n]
    }
    for (let i = 2; i <= n; i++) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2])
    }
    return fib[fib.length - 1];
};