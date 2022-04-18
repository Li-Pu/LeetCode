/**
 * @param {number[][]} grid
 * @return {number}
 * time: 120ms space: 48.7MB
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

            const update = (a, b) => {
                const newRow = row + a, newCol = col + b;
                if (newRow < 0 || newRow >= len) {
                    return;
                }
                if (newCol < 0 || newCol >= len) {
                    return;
                }
                if (grid[newRow][newCol] === 0 && checks[newRow][newCol] === 0) {
                    cells.push([newRow, newCol]);
                    checks[newRow][newCol] = 1;
                }
            }

            for (let t of [[-1, -1], [-1, 0], [0, -1], [1, -1], [-1, 1], [1, 0], [0, 1], [1, 1]]) {
                update(...t)
            }
        }
        start++;
    }
    return -1;
};

