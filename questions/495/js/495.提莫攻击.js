/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 * time: 60ms space: 45MB
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let ret = 0;
    if (timeSeries.length === 0) {
        return ret;
    }

    for (let i = 1; i < timeSeries.length; i++) {
        const gap = timeSeries[i] - timeSeries[i - 1];
        if (gap <= duration) {
            ret += gap;
        } else {
            ret += duration;
        }
    }

    ret += duration;

    return ret;
};

