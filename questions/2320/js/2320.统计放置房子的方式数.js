/**
 * @param {number} n
 * @return {number}
 * time: 484ms space: 68.3MB
 */
var countHousePlacements = function (n) {
    const dp = [[1n, 1n]];
    for (let i = 1; i < n; i++){
        dp.push([
            dp[i - 1][0] + dp[i - 1][1],
            dp[i - 1][0],
        ]);
    }
    const b = dp[dp.length - 1][0] + dp[dp.length - 1][1];
    return (b * b) % BigInt(1e9 + 7);
};
