/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 * time: 96ms space: 51.6MB
 */
var minOperations = function (nums, x) {
    let ret = Number.POSITIVE_INFINITY;
    let l = 0, r = nums.length - 1;

    let t = x - nums[0];
    l = 1;
    while (t > 0 && l <= r) {
        t -= nums[l++];
    }

    if (l > r) {
        return t === 0 ? l : -1;
    }

    while (l > 0) {
        if (t === 0) {
            ret = Math.min(ret, l + nums.length - r - 1);
        }
        l--;
        t += nums[l];
        while (t > 0) {
            t -= nums[r--];
        }
    }
    if (t === 0) {
        ret = Math.min(ret, l + nums.length - r - 1);
    }

    return ret === Number.POSITIVE_INFINITY ? -1 : ret;
};
