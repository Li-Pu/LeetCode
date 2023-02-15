/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * time: 80ms space: 47.2MB
 */
var subarrayLCM = function (nums, k) {
    const lcm = (a, b) => {
        let [max, min] = a > b ? [a, b] : [b, a];
        while (min !== 0) {
            const t = max % min;
            max = min;
            min = t;
        }
        return a * b / max;
    }
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let l = 1;
        for (let j = i; j < nums.length; j++) {
            l = lcm(l, nums[j])
            if (k % l > 0) {
                break;
            }
            if (l === k) {
                result++;
            }
        }
    }
    return result;
};
