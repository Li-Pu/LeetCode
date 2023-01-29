/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * tiem: 60ms space: 41.4MB
 */
var getHappyString = function (n, k) {
    let maxCount = 3 * Math.pow(2, n - 1);
    if (k > maxCount) {
        return '';
    }
    let result = '';
    const rootMap = ['a', 'b', 'c'];
    const nodeMap = {
        a: ['b', 'c'],
        b: ['a', 'c'],
        c: ['a', 'b']
    }
    maxCount /= 3
    let a = (k - 1) % maxCount, b = Math.floor((k - 1) / maxCount);
    let t = rootMap[b]
    result += t;
    while (result.length < n) {
        maxCount /= 2
        b = Math.floor(a / maxCount)
        a = a % maxCount
        t = nodeMap[t][b]
        result += t
    }
    return result;
};