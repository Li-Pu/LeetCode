/**
 * @param {character[][]} grid
 * @return {number}
 * time: 88ms space: 50.1MB
 */
var numIslands = function (grid) {
    const m = grid.length, n = grid[0].length;
    let ret = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                ret++;
                let stack = [[i, j]];
                grid[i][j] = '0';
                while (stack.length > 0) {
                    const newStack = [];
                    for (let k = 0; k < stack.length; k++) {
                        const [a, b] = stack[k];
                        if (a > 0 && grid[a - 1][b] === '1') {
                            grid[a - 1][b] = '0';
                            newStack.push([a - 1, b]);
                        }
                        if (b > 0 && grid[a][b - 1] === '1') {
                            grid[a][b - 1] = '0';
                            newStack.push([a, b - 1]);
                        }
                        if (a + 1 < m && grid[a + 1][b] === '1') {
                            grid[a + 1][b] = '0';
                            newStack.push([a + 1, b]);
                        }
                        if (b + 1 < n && grid[a][b + 1] === '1') {
                            grid[a][b + 1] = '0';
                            newStack.push([a, b + 1])
                        }
                    }
                    stack = newStack;
                }
            }
        }
    }

    return ret;
};
