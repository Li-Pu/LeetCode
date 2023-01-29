/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * time: 68ms space: 43.5MB
 */
var countKDifference = function (nums, k) {
    let ret = 0;
    const cnt = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        ret += (cnt.get(num - k) || 0) + (cnt.get(num + k) || 0);
        cnt.set(num, (cnt.get(num) || 0) + 1);
    }

    return ret;
};
