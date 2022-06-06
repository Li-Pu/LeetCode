/**
 * @param {number[]} nums
 * @return {number}
 * time: 132ms space: 42.9MB
 */
var lengthOfLIS = function (nums) {
    const len = nums.length;
    let ret = 0;
    const dp = [];

    for (let i = 0; i < len; i++) {
        dp.push(1);
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        if (dp[i] > ret) {
            ret = dp[i];
        }
    }

    return ret;
};
