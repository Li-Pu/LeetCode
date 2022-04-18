/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * time: 4220ms space: 53.4MB
 */
var maxDistance = function (nums1, nums2) {
    const len = Math.min(nums1.length, nums2.length);
    let res = 0;
    for (let i = 0; i < len; i++) {
        if (nums1[i] <= nums2[i]) {
            for (let j = i + 1; j < nums2.length; j++) {
                if (nums1[i] > nums2[j]) {
                    break;
                }
                if (j - i > res) {
                    res = j - i;
                }
            }
        }
    }
    return res;
};

