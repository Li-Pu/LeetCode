/**
 * @param {string} s
 * @return {number}
 * time: 56ms space: 41.1MB
 */
var minSwaps = function (s) {
    let zeroCount = 0, zeroSwapCount = 0, oneCount = 0, oneSwapCount = 0;
    for (let i = 0; i < s.length; i++){
        if (s.at(i) === '0') {
            zeroCount++;
            if (i % 2 === 0) {
                oneSwapCount++;
            }
        } else {
            oneCount++;
            if (i % 2 === 0) {
                zeroSwapCount++;
            }
        }
    }
    if (Math.abs(oneCount - zeroCount) > 1) {
        return -1;
    }
    if (oneCount > zeroCount) {
        return oneSwapCount;
    } else if (zeroCount > oneCount) {
        return zeroSwapCount;
    }
    return Math.min(oneSwapCount, zeroSwapCount);
};
