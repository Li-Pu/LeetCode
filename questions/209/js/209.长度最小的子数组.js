/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * time: 64ms space: 41.8MB
 */
var minSubArrayLen = function (target, nums) {
    let ret = nums.length + 1;
    const dp = new Array(ret).fill(0);

    for (let i = 0; i < nums.length; i++) {
        dp[i] = (i > 0 ? dp[i - 1] : 0) + nums[i];
        let left = Math.min(i + 1, ret);
        while ((i - left < 0 && dp[i] >= target) || (i - left >= 0 && dp[i] - dp[i - left] >= target)) {
            ret = left;
            left--;
        }
    }

    return ret > nums.length ? 0 : ret;
};
