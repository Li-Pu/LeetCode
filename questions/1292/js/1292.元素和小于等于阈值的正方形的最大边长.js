/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 * time: 88ms space: 49.1MB
 */
var maxSideLength = function (mat, threshold) {
    let m = mat.length, n = mat[0].length;
    const prefixSumMat = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            prefixSumMat[i][j] =
                (j > 0 ? prefixSumMat[i][j - 1] : 0) +
                (i > 0 ? prefixSumMat[i - 1][j] : 0) -
                (i > 0 && j > 0 ? prefixSumMat[i - 1][j - 1] : 0) + mat[i][j]
        }
    }

    let ret = 0;
    for (let i = 0; i < Math.min(m, n); i++) {
        for (let j = 0; j < m - i; j++) {
            for (let k = 0; k < n - i; k++) {
                const sum =
                    prefixSumMat[j + i][k + i] -
                    (j > 0 ? prefixSumMat[j - 1][k + i] : 0) -
                    (k > 0 ? prefixSumMat[j + i][k - 1] : 0) +
                    (j > 0 && k > 0 ? prefixSumMat[j - 1][k - 1] : 0)
                if (sum <= threshold && i + 1 > ret) {
                    ret = i + 1;
                    j = m - i;
                    break;
                }
            }
        }

        if (ret !== i + 1) {
            break;
        }
    }

    return ret;

};

