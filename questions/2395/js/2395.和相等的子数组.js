/**
 * @param {number[]} nums
 * @return {boolean}
 * time: 56ms space: 41.2MB
 */
var findSubarrays = function (nums) {
    const st = new Set();
    for (let i = 0; i < nums.length - 1; i++){
        const t = nums[i] + nums[i + 1];
        if (st.has(t)) {
            return true;
        } else {
            st.add(t);
        }
    }
    return false;
};
