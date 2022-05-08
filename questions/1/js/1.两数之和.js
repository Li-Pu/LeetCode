/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * time: 52ms space: 42.1MB
 */
var twoSum = function (nums, target) {
    const len = nums.length;
    const hashMap = new Map();

    for (let i = 0; i < len; i++) {
        const t = target - nums[i];
        if (hashMap.has(t)) {
            return [i, hashMap.get(t)]
        }
        hashMap.set(nums[i], i);
    }

    return [-1, -1];
};
// @lc code=end

