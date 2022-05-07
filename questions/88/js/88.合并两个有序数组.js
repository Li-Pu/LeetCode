/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * time: 56ms space: 41MB
 */
var merge = function (nums1, m, nums2, n) {

    let tm = nums1.length - 1;
    for (let i = m - 1; i >= 0; i--, tm--) {
        nums1[tm] = nums1[i];
    }

    tm++;
    let tk = tn = 0;

    while (tm < nums1.length || tn < n) {
        if (tn >= n) {
            break;
        }
        if (tm >= nums1.length) {
            nums1[tk++] = nums2[tn++];
            continue;
        }
        nums1[tk++] = nums1[tm] <= nums2[tn] ? nums1[tm++] : nums2[tn++];
    }

};
