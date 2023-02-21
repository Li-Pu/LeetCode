/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 * time: 96ms space: 47MB
 */
var minTaps = function (n, ranges) {
    const intervals = ranges.map((range, index) => [
        Math.max(0, index - range),
        Math.min(n, index + range)
    ])
    intervals.sort((a, b) => a[0] - b[0]);
    const dp = new Array(n + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for(let i = 0; i< intervals.length; i++) {
        const [start, end] = intervals[i];
        if(dp[start] === Number.MAX_VALUE) {
            return -1;
        }
        for(let j = start; j <= end; j++) {
            dp[j] = Math.min(dp[j], dp[start] + 1);
        }
    }
    return dp[n];
};
