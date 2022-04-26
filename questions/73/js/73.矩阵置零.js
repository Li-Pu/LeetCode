/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * time: 80ms space: 44.4MB
 */
var setZeroes = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const row = Array(m).fill(false);
    const column = Array(n).fill(false);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row[i] = true;
                column[j] = true;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || column[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};
