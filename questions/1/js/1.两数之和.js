/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * time: 196ms space: 41.7MB
 */
var twoSum = function (nums, target) {
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
};
