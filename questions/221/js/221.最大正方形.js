/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let ret = 0;
    const dp = [];
    for (let i = 0; i < matrix.length; i++) {
        let t = [];
        dp.push(t);
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === "1") {
                let v = 1;
                if (i > 0 && j > 0 && dp[i - 1][j - 1] > 0) {
                    let u = dp[i - 1][j - 1];
                    let k = 1;
                    for (; k <= u; k++) {
                        if (
                            matrix[i - k][j] !== "1" ||
                            matrix[i][j - k] !== "1"
                        ) {
                            break;
                        }
                    }
                    v = k;
                }
                ret = Math.max(ret, v * v);
                t.push(v);
            } else {
                t.push(0);
            }
        }
    }
    return ret;
};
