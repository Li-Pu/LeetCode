/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * time: 72ms space: 41.6MB
 */
var searchRange = function (nums, target) {
    let left = -1, right = - 1;
    let a = 0, b = nums.length - 1;
    while (a < b) {
        const mid = Math.floor((a + b) / 2);
        if (nums[mid] < target) {
            a = mid + 1;
        } else {
            b = mid;
        }
    }
    if (nums[a] === target) {
        left = a;
    }
    a = 0, b = nums.length - 1;
    while (a < b) {
        const mid = Math.ceil((a + b) / 2);
        if (nums[mid] > target) {
            b = mid - 1;
        } else {
            a = mid;
        }
    }
    if (nums[b] === target) {
        right = b;
    }
    return [left, right]
};
