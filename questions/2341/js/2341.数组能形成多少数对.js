/**
 * @param {number[]} nums
 * @return {number[]}
 * time: 56ms space: 41.4MB
 */
var numberOfPairs = function (nums) {
    const mp = new Map();
    const result = [0, 0];
    for (let i = 0; i < nums.length; i++) {
        const t = nums[i];
        if (mp.has(t)) {
            mp.delete(t);
            result[0]++;
            result[1]--;
        } else {
            mp.set(t, true);
            result[1]++;
        }
    }
    return result;
};
