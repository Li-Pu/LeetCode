/**
 * @param {string} s
 * @return {number}
 * time: 80ms space: 45.7MB
 */
var numWays = function (s) {
    const zeroCounts = [];
    let t = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            t++;
        } else {
            zeroCounts.push(t);
        }
    }
    if (zeroCounts.length === 0) {
        return ((t - 1) * (t - 2) / 2) % 1000000007;
    }
    t = s.length - t;
    if (t % 3 !== 0) {
        return 0;
    }
    const oneCount = Math.floor(t / 3);
    const a = zeroCounts[oneCount] - zeroCounts[oneCount - 1],
        b = zeroCounts[2 * oneCount] - zeroCounts[2 * oneCount - 1];
    return (a + 1) * (b + 1) % 1000000007;
};
