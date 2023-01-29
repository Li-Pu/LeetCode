/**
 * @param {number[][]} grid
 * @return {number}
 * time: 72ms space: 43.5MB
 */
var maxAreaOfIsland = function (grid) {
    let ret = 0;

    const check = (i, j) => {
        let area = 0
        if (grid[i][j] === 0) {
            return area;
        }
        area += grid[i][j];
        grid[i][j] = 0;

        if (i > 0) {
            area += check(i - 1, j);
        }

        if (j > 0) {
            area += check(i, j - 1);
        }

        if (i < grid.length - 1) {
            area += check(i + 1, j);
        }

        if (j < grid[i].length - 1) {
            area += check(i, j + 1);
        }

        return area;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const area = check(i, j);
            if (area > ret) {
                area
                ret = area;
            }
        }
    }


    return ret;
};
