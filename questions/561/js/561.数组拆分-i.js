/**
 * @param {number[]} nums
 * @return {number}
 * time: 112ms space: 46.7MB
 */
var arrayPairSum = function (nums) {
    const a = nums.sort((a, b) => a - b);
    let ret = 0;
    for (let i = 0; i < a.length; i += 2) {
        ret += a[i];
    }
    return ret;
};

