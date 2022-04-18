/**
 * @param {number[][]} grid
 * @return {number}
 * time: 132ms space: 49.3MB
 */
var shortestPathBinaryMatrix = function (grid) {
    const len = grid.length;
    if (len === 0 || grid[0][0] === 1) {
        return -1;
    }
    const cells = [[0, 0]];
    const checks = Array(len).fill(0).map(() => Array(len).fill(0));
    let start = 1;
    while (cells.length > 0) {
        let tlen = cells.length;
        while (tlen-- > 0) {
            const [row, col] = cells.shift();

            if (row === len - 1 && col === len - 1) {
                return start;
            }

            const valueCheck = (a, b) => grid[a][b] === 0 && checks[a][b] === 0
            const valueSet = (a, b) => {
                cells.push([a, b])
                checks[a][b] = 1
            }

            // 左上
            if (row > 0 && col > 0 && valueCheck(row - 1, col - 1)) {
                valueSet(row - 1, col - 1);
            }
            // 上
            if (row > 0 && valueCheck(row - 1, col)) {
                valueSet(row - 1, col)
            }
            // 左
            if (col > 0 && valueCheck(row, col - 1)) {
                valueSet(row, col - 1)
            }
            // 左下
            if (row < len - 1 && col > 0 && valueCheck(row + 1, col - 1)) {
                valueSet(row + 1, col - 1)
            }
            // 右上
            if (row > 0 && col < len - 1 && valueCheck(row - 1, col + 1)) {
                valueSet(row - 1, col + 1)
            }
            // 下
            if (row < len - 1 && valueCheck(row + 1, col)) {
                valueSet(row + 1, col)
            }
            // 右
            if (col < len - 1 && valueCheck(row, col + 1)) {
                valueSet(row, col + 1)
            }
            // 右下
            if (row < len - 1 && col < len - 1 && valueCheck(row + 1, col + 1)) {
                valueSet(row + 1, col + 1);
            }
        }
        start++;
    }
    return -1;
};

