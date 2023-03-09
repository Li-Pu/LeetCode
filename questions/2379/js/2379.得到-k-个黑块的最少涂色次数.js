/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 * time: 80ms space: 44.5MB
 */
var minimumRecolors = function (blocks, k) {
    const len = blocks.length;
    const mtr = new Array(k).fill(0).map(() => new Array(len).fill(0));
    for (let i = 0; i < k; i++){
        for (let j = i; j < len; j++) {
            if (i === 0) {
                mtr[i][j] = blocks[j] === 'B' ? 0 : 1;
            } else {
                mtr[i][j] = blocks[j] === 'B' ? mtr[i - 1][j - 1] : mtr[i - 1][j - 1] + 1;
            }
        }
    }
    let result = k;
    for (let i = k - 1; i < len; i++){
        if (mtr[k - 1][i] < result) {
            result = mtr[k - 1][i];
        }
    }
    return result;
};
