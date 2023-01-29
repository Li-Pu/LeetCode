/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * time: 60ms space: 41.7MB
 */
var nextPermutation = function (nums) {
    const len = nums.length;
    if (len <= 1) {
        return;
    }

    const swap = (i, j) => {
        const t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }

    let aIndex = len - 2;
    while (aIndex >= 0 && nums[aIndex] >= nums[aIndex + 1]) {
        aIndex--;
    }

    let bIndex = len - 1;
    while (bIndex > aIndex && nums[aIndex] >= nums[bIndex]) {
        bIndex--;
    }

    if (aIndex >= 0 && bIndex >= 0) {
        swap(aIndex, bIndex);
    }

    aIndex++;
    bIndex = len - 1;
    while (aIndex < bIndex) {
        swap(aIndex, bIndex);
        aIndex++;
        bIndex--;
    }

};

