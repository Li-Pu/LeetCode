/**
 * @param {number[]} nums
 * @return {number[][]}
 * time: 112ms space: 51.9MB
 */
var threeSum = function (nums) {
    const ret = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let k = nums.length - 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            while (j < k && nums[i] + nums[j] + nums[k] > 0) {
                k--;
            }
            if (j === k) {
                break;
            }
            if (nums[i] + nums[j] + nums[k] === 0) {
                ret.push([nums[i], nums[j], nums[k]])
            }
        }
    }

    return ret;
};
