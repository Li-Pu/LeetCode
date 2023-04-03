/**
 * @param {number[]} nums
 * @return {number}
 * time: 64ms space: 47.5MB
 */
var xorBeauty = function (nums) {
    const len = nums.length;
    let result = 0;
    for (let k = 0; k < len; k++) {
        result ^= nums[k];
    }
    return result;
};
