/**
 * @param {number[]} nums
 * @return {number}
 * time: 64ms space: 41.7MB
 */
var lengthOfLIS = function (nums) {
    const len = nums.length;
    const dp = [];

    for (let i = 0; i < len; i++) {
        const t = nums[i];
        let index = dp.length;
        while (index > 0 && dp[index - 1] >= t) {
            index--;
        }
        dp[index] = t;
    }

    return dp.length;
};
