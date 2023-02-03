/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * time: 240ms space: 61.9MB
 */
var numTriplets = function (nums1, nums2) {
    const map = new Map();
    let result = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = i; j < nums1.length; j++) {
            const t = nums1[i] * nums1[j];
            if (!map.has(t)) {
                map.set(t, [0, 0])
            }
            let [a, b] = map.get(t)
            if (i === j) {
                a++;
            } else {
                b++;
            }
            map.set(t, [a, b]);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        for (let j = i; j < nums2.length; j++) {
            const t = nums2[i] * nums2[j];
            if (map.has(t)) {
                if (i === j) {
                    result += map.get(t)[1];
                } else {
                    result += map.get(t)[0];
                }
            }
        }
    }

    return result;
};
