/**
 * @param {number} n
 * @return {number}
 * time: 52ms space: 40.9MB
 */
var climbStairs = function (n) {
    let a = b = 1;
    let i = 1;

    while (i < n) {
        const t = a + b;
        a = b;
        b = t;
        i++;
    }

    return b;
};

