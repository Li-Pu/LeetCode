/**
 * @param {number[]} nums
 * @return {boolean}
 * time: 76ms space: 51MB
 */
var isGoodArray = function (nums) {
    const gcd = (a, b) => {
        let [max, min] = a > b ? [a, b] : [b, a]
        while (min !== 0) {
            const t = max % min
            max = min
            min = t
        }
        return max;
    }
    let divisor = nums[0]
    for (let num of nums) {
        divisor = gcd(divisor, num)
        if (divisor === 1) {
            break
        }
    }
    return divisor === 1;
};
