/**
 * @param {number[][]} matrix
 * @return {number[]}
 * time: 64ms space: 40.6MB
 */
 var spiralOrder = function (matrix) {
    const ret = [];
    const m = matrix.length, n = matrix[0].length;

    for (let i = 0; i < Math.min(m, n) / 2; i++) {
        for (let j = i; j < n - i; j++) {
            ret.push(matrix[i][j])
        }
        for (let j = i + 1; j < m - i; j++) {
            ret.push(matrix[j][n - i - 1])
        }
        for (let j = n - i - 2; m - i - 1 !== i && j >= i; j--) {
            ret.push(matrix[m - i - 1][j])
        }
        for (let j = m - i - 2; n - i - 1 !== i && j > i; j--) {
            ret.push(matrix[j][i])
        }
    }

    return ret;
};
