/**
 * @param {number[]} arr
 * @return {number}
 * time: 328ms space: 67MB
 */
var subarrayBitwiseORs = function (arr) {
    const len = arr.length;

    const result = new Set();
    let tmp = new Set();

    for (let i = 0; i < len; i++) {
        const tRes = new Set();
        for (let tt of tmp) {
            tRes.add(tt | arr[i]);
        }
        tRes.add(arr[i]);
        tmp = tRes;
        tRes.forEach(i => result.add(i))
    }

    return result.size
};
