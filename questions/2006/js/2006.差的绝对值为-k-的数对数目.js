/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * time: 64ms space: 41.3MB
 */
var countKDifference = function (nums, k) {
    let ret = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[j] - nums[i]) === k) {
                ret++;
            }
        }
    }

    return ret;
};
