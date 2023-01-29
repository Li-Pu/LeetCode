/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * time: 96ms space: 48.8MB
 */
var subarraysWithKDistinct = function (nums, k) {
    let l = r = 0;
    let ret = 0;
    const mp = new Map();

    while (r <= nums.length) {
        while (mp.size < k && r < nums.length) {
            const val = nums[r++];
            mp.set(val, 1 + (mp.get(val) ?? 0))
        }
        if (mp.size !== k) {
            break;
        }
        ret++;
        let t = r;
        while (t < nums.length && mp.has(nums[t])) {
            ret++;
            t++;
        }
        const val = nums[l++];
        if (mp.get(val) > 1) {
            mp.set(val, mp.get(val) - 1)
        } else {
            mp.delete(val)
        }
    }

    return ret;
};

