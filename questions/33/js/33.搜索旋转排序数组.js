/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * time: 56ms space: 41.2MB
 */
var search = function (nums, target) {
    return nums.findIndex(item => item === target);
};
