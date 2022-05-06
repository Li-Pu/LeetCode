/**
 * @param {number} x
 * @return {number}
 * time: 72ms space: 42.7MB
 */
var mySqrt = function (x) {
    if (x <= 1) {
        return x;
    }

    let ret = x;

    while (ret > x / ret) {
        ret = Math.floor((ret + x / ret) / 2)
    }

    return ret;
};
