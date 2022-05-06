/**
 * @param {number} x
 * @return {number}
 * time: 68ms space: 42.7MB
 */
var mySqrt = function (x) {
    if (x <= 1) {
        return x;
    }
    let left = 0, right = x;

    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2);
        if (mid <= x / mid) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return left;
};
