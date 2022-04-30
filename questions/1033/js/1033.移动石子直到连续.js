/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 * time: 64ms space: 41.2MB
 */
var numMovesStones = function (a, b, c) {
    const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    const middle = a + b + c - max - min;
    const gap1 = middle - min - 1;
    const gap2 = max - middle - 1;
    const minMoves = gap1 === 0 && gap2 === 0 ? 0 : gap1 === 0 || gap2 === 0 || gap1 === 1 || gap2 === 1 ? 1 : 2;
    return [minMoves, gap1 + gap2]
};

