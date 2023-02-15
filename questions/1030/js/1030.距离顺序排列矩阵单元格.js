/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 * time: 140ms space: 48.9MB
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
    const result = [];
    for (let i = 0; i < rows; i++) {
        const t1 = Math.abs(i - rCenter);
        for (let j = 0; j < cols; j++) {
            const t2 = Math.abs(j - cCenter);
            result.push([i, j, t1 + t2]);
        }
    }
    result.sort((a, b) => a[2] - b[2]);
    return result.map(([a, b, c]) => [a, b]);
};
