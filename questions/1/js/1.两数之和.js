/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * time: 72ms space: 43.4MB
 */
var twoSum = function (nums, target) {
    const len = nums.length;

    const numAndIndexs = nums.map((value, index) => [value, index]).sort((a, b) => a[0] - b[0]);
    numAndIndexs

    let left = 0, right = len - 1;
    while (left < right) {
        const sum = numAndIndexs[left][0] + numAndIndexs[right][0];
        if (sum === target) {
            return [numAndIndexs[left][1], numAndIndexs[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [-1, -1];
};
