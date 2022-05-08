/**
 * @param {number[]} nums
 * @return {number}
 * time: 88ms space: 49MB
 */
var maxSubArray = function (nums) {
    const len = nums.length;
    let current = 0;
    let ret = Number.NEGATIVE_INFINITY,
        sum = Number.NEGATIVE_INFINITY;

    while (current < len) {
        sum = Math.max(sum + nums[current], nums[current]);
        if (sum > ret) {
            ret = sum;
        }
        current++;
    }


    return ret;
};

