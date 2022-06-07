/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * time: 88ms space: 46.5MB
 */
var minDistance = function (word1, word2) {
    const len1 = word1.length,
        len2 = word2.length;
    const op = new Array(len1 + 1)
        .fill(0)
        .map(() => new Array(len2 + 1).fill(0));

    for (let i = 1; i <= len1; i++) {
        op[i][0] = i;
    }

    for (let j = 1; j <= len2; j++) {
        op[0][j] = j;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                op[i][j] = op[i - 1][j - 1];
            } else {
                op[i][j] =
                    1 + Math.min(op[i - 1][j], op[i][j - 1], op[i - 1][j - 1]);
            }
        }
    }

    return op[len1][len2];
};
