/**
 * @param {number[][]} grid
 * @return {number}
 * time: 184ms space: 45.3MB
 */
var numEnclaves = function (grid) {
    let old = 0, cur = 0;

    for (let i = 0; i < grid.length; i++) {
        if (i === 0 || i === grid.length - 1) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 1) {
                    grid[i][j] = -1;
                    cur++;
                }
            }
        } else {
            if (grid[i][0] === 1) {
                grid[i][0] = -1;
                cur++;
            }
            if (grid[i][grid[i].length - 1] === 1) {
                grid[i][grid[i].length - 1] = -1;
                cur++;
            }
        }
    }

    while (cur !== 0) {
        old += cur;
        cur = 0;
        for (let i = 1; i < grid.length - 1; i++) {
            for (let j = 1; j < grid[i].length - 1; j++) {
                if (grid[i][j] === 1 && (grid[i - 1][j] === -1 || grid[i][j - 1] === -1 || grid[i + 1][j] === -1 || grid[i][j + 1] === -1)) {
                    grid[i][j] = -1;
                    cur++;
                }
            }
        }
    }

    cur = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                cur++;
            }
        }
    }

    return cur;

};
