/**
 * @param {number[]} nums
 * @return {number}
 * time: 68ms space: 41.5MB
 */
var lengthOfLIS = function (nums) {
    const len = nums.length;
    const dp = [];

    for (let i = 0; i < len; i++) {
        const t = nums[i];
        if (dp.length === 0 || dp[dp.length - 1] < t) {
            dp.push(t);
        } else {
            let left = 0,
                right = dp.length - 1;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (dp[mid] >= t) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            dp[left] = t;
        }
    }

    return dp.length;
};
