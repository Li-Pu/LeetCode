/**
 * @param {number[]} heights
 * @return {number}
 * time: 68ms space: 41.2MB
 */
var heightChecker = function (heights) {
    const expected = [...heights];
    expected.sort((a, b) => a - b);
    let ret = expected.length;

    for (let i = 0; i < expected.length; i++) {
        if (expected[i] === heights[i]) {
            ret--;
        }
    }

    return ret;
};

