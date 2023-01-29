/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * time: 96ms space: 45.9MB
 */
var combinationSum = function (candidates, target) {
    const len = candidates.length;
    const tmp = new Array(target + 1).fill(0).map(() => new Array());
    tmp[0].push([]);
    for (let i = 0; i < len; i++) {
        const t = candidates[i];
        for (let j = 0; j <= target - t; j++) {
            tmp[j].forEach((arr) => {
                tmp[j + t].push(arr.concat(t));
            })
        }
    }
    return tmp[target];
};
