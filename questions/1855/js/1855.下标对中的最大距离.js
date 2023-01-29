/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * time: 92ms space: 53.1MB
 */
var maxDistance = function (nums1, nums2) {
    const len = Math.min(nums1.length, nums2.length);
    let res = 0;
    let left = 0, right = 0;
    while (left < len) {
        if (nums1[left] <= nums2[left]) {
            right = Math.max(right, left + 1);
            while (right < nums2.length && nums1[left] <= nums2[right]) {
                right++;
            }
            res = Math.max(res, right - left - 1)

        }
        left++;
    }
    return res;
};

