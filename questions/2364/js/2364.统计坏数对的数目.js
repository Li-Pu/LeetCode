/**
 * @param {number[]} nums
 * @return {number}
 * time: 100ms space: 63.6MB
 */
var countBadPairs = function (nums) {
    let result = 0;
    const mp = new Map();
    for (let i = 0; i < nums.length; i++) {
        const t = mp.get(nums[i] - i) ?? 0;
        result += i - t;
        mp.set(nums[i] - i, t + 1);
    }
    return result;
};
