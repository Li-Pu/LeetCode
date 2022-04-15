/**
 * @param {number[]} nums
 * @return {number}
 * time: 76ms space: 43.5MB
 */
var findPeakElement = function (nums) {
    const tNums = [Number.NEGATIVE_INFINITY, ...nums, Number.NEGATIVE_INFINITY]
    let left = 1, right = nums.length, mid = 1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (tNums[mid - 1] < tNums[mid] && tNums[mid + 1] < tNums[mid]) {
            break;
        } else if (tNums[mid] < tNums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return mid - 1;
};

