/**
 * @param {number[]} nums
 * @return {number[]}
 * time: 76ms space: 43MB
 */
var smallerNumbersThanCurrent = function (nums) {
    const rets = Array(nums.length).fill(nums.length)

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] <= nums[j]) {
                rets[i]--;
            }
        }
    }

    return rets
};

