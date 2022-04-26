/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * time: 72ms space: 43.9MB
 */
var setZeroes = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let firstRow = false, firstColumn = false;

    for (let i = 0; i < n; i++) {
        if (matrix[0][i] === 0) {
            firstRow = true;
            break;
        }
    }

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColumn = true;
            break;
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (firstRow) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0;
        }
    }

    if (firstColumn) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

};

