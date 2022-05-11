/**
 * @param {character[][]} grid
 * @return {number}
 * time: 68ms space: 43.6MB
 */
var numIslands = function (grid) {
    const m = grid.length, n = grid[0].length;
    let ret = 0;

    const dfs = (i, j) => {
        grid[i][j] = '0';
        if (i > 0 && grid[i - 1][j] === '1') {
            dfs(i - 1, j);
        }
        if (j > 0 && grid[i][j - 1] === '1') {
            dfs(i, j - 1);
        }
        if (i + 1 < m && grid[i + 1][j] === '1') {
            dfs(i + 1, j);
        }
        if (j + 1 < n && grid[i][j + 1] === '1') {
            dfs(i, j + 1)
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                ret++;
                dfs(i, j);
            }
        }
    }

    return ret;
};
