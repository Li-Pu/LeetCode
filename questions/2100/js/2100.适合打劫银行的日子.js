/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 * time: 6088ms space: 66.5MB
 */
var goodDaysToRobBank = function (security, time) {
    let stackDescrease = [];
    let stackIncrease = [];
    const res = [];

    for (let i = 0; i < security.length; i++) {
        if (stackDescrease.length > 0 && security[stackDescrease[stackDescrease.length - 1]] < security[i]) {
            stackDescrease = [];
        }
        stackDescrease.push(i);

        if (security[i - 1] > security[i]) {
            stackIncrease = [];
        }

        if (stackDescrease.length > time) {
            stackIncrease.push(i);

        }
        if (stackIncrease.length > 0 && i - stackIncrease[0] >= time) {
            res.push(stackIncrease.shift())
        }
    }

    return res;
};
