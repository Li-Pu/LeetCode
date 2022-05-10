/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * time: 80ms space: 41.9MB
 */
var findKthLargest = function (nums, k) {
    const stack = [];

    for (let i = 0; i < nums.length; i++) {
        let t = Math.min(stack.length, k);
        while (t > 0 && stack[t - 1] < nums[i]) {
            stack[t] = stack[t - 1];
            t--;
        }
        stack[t] = nums[i];
    }

    return stack[k - 1];
};
