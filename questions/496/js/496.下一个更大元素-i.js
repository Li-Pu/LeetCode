// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * time: 72 ms space: 43.3MB
 */
var nextGreaterElement = function (nums1, nums2) {
    const mp = new Map();
    const stack = [];
    for (let i = 0; i < nums2.length; i++) {
        const t = nums2[i];
        while (stack.length > 0 && stack[stack.length - 1] < t) {
            const k = stack.pop();
            mp.set(k, t);
        }
        stack.push(t)
    }

    return nums1.map((n) => mp.get(n) ?? -1);
};
// @lc code=end

