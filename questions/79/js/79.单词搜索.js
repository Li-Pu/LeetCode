/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * time: 272ms space: 41.5MB
 */
var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    const selected = new Array(m).fill(0).map(() => new Array(n).fill(0));

    const test = (i, j, k) => {
        if (selected[i][j] === 1 || board[i][j] !== word[k]) {
            return false;
        }
        selected[i][j] = 1;
        if (
            k + 1 === word.length ||
            (i > 0 && test(i - 1, j, k + 1)) ||
            (j > 0 && test(i, j - 1, k + 1)) ||
            (i < m - 1 && test(i + 1, j, k + 1)) ||
            (j < n - 1 && test(i, j + 1, k + 1))
        ) {
            selected[i][j] = 0;
            return true;
        }
        selected[i][j] = 0;
        return false;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (test(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};
