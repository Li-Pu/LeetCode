/**
 * @param {string} s
 * @return {string}
 * time: 276ms space: 47.1MB
 */
var longestPalindrome = function (s) {
    const len = s.length;
    const dp = new Array(len).fill(0).map(() => new Array(2).fill(0));
    let ret = '';

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i; j++) {
            if (
                s.charAt(j) === s.charAt(j + i) &&
                (i <= 1 || dp[j + 1][i % 2] === j + i)
            ) {
                dp[j][i % 2] = j + i + 1;
                if (i >= ret.length) {
                    ret = s.slice(j, j + i + 1);
                }
            }
        }
    }

    return ret;
};
