/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 * time: 108ms space: 48.1MB
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
    const result = [];
    const xM = Math.max(rCenter, rows - rCenter);
    const yM = Math.max(cCenter, cols - cCenter);
    for (let i = 0; i <= xM + yM; i++) {
        for (let j = Math.max(rCenter - i, 0); j < Math.min(rows, rCenter + i + 1); j++){
            const t = i - Math.abs(j - rCenter);
            if (cCenter - t >= 0) {
                result.push([j, cCenter - t]);
            }
            if (t !== 0 && cCenter + t < cols) {
                result.push([j, cCenter + t]);
            }
        }
    }
    return result;
};
