/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 * time: 84ms space: 50.9MB
 */
var minCost = function (colors, neededTime) {
    let ret = 0;

    let colorSum = 0, colorMax = 0;
    for (let i = 0; i < colors.length; i++) {
        if (i === 0 || colors[i] !== colors[i - 1]) {
            ret += colorSum - colorMax;
            colorSum = neededTime[i];
            colorMax = neededTime[i];
        } else {
            colorSum += neededTime[i]
            colorMax = Math.max(colorMax, neededTime[i])
        }
    }

    ret += colorSum - colorMax;

    return ret;
};

