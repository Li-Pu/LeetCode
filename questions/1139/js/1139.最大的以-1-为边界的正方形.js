/**
 * @param {number[][]} grid
 * @return {number}
 * time: 104ms space: 46.8MB
 */
var largest1BorderedSquare = function (grid) {
    const mtr = new Array();
    for (let i = 0; i < grid.length; i++) {
        const row = new Array();
        for (let j = 0; j < grid[i].length; j++) {
            row.push([
                grid[i][j] ? (row.length > 0 ? row[row.length - 1][0] : 0) + grid[i][j] : 0,
                grid[i][j] ? ((i > 0 ? mtr[i - 1][j][1] : 0) + grid[i][j]) : 0
            ])
        }
        mtr.push(row);
    }
    let result = 0;
    for (let i = 1; i <= grid.length && i <= grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
            for (let k = 0; k < grid[j].length; k++) {
                if (
                    mtr[j][k][0] >= i &&
                    mtr[j][k][1] >= i &&
                    mtr[j][k - i + 1][1] >= i &&
                    mtr[j - i + 1][k][0] >= i &&
                    i * i > result
                ) {
                    result = i * i;
                }
            }
        }
    }
    return result;
};
