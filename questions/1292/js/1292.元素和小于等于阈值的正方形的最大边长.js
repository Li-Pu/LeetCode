/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 * time: 176ms space: 51.8MB
 */
var maxSideLength = function (mat, threshold) {
    let m = mat.length, n = mat[0].length;
    const rowMat = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const columnMat = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rowMat[i][j] = (j > 0 ? rowMat[i][j - 1] : 0) + mat[i][j];
            columnMat[i][j] = (i > 0 ? columnMat[i - 1][j] : 0) + mat[i][j];
        }
    }

    let ret = 0;
    const mtr = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < Math.min(m, n); i++) {
        for (let j = 0; j < m - i; j++) {
            for (let k = 0; k < n - i; k++) {
                mtr[j][k] += rowMat[j + i][k + i] - (k > 0 ? rowMat[j + i][k - 1] : 0) + (columnMat[j + i][k + i] - (j > 0 ? columnMat[j - 1][k + i] : 0)) - mat[j + i][k + i]
                if (mtr[j][k] <= threshold && i + 1 > ret) {
                    ret = i + 1;
                }
            }
        }

        if (ret !== i + 1) {
            break;
        }
    }

    return ret;
};

