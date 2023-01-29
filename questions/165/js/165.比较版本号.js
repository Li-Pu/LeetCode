/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 * time: 52ms space: 41.2MB
 */
var compareVersion = function (version1, version2) {
    const nums1 = version1.split('.').map(Number);
    const nums2 = version2.split('.').map(Number);
    const len = Math.max(nums1.length, nums2.length);

    while (nums1.length < len) {
        nums1.push(0);
    }

    while (nums2.length < len) {
        nums2.push(0);
    }

    for (let i = 0; i < len; i++) {
        if (nums1[i] > nums2[i]) {
            return 1;
        }
        if (nums1[i] < nums2[i]) {
            return -1;
        }
    }

    return 0;
};
