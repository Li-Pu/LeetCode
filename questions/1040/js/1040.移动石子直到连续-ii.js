/**
 * @param {number[]} stones
 * @return {number[]}
 * time: 80ms space: 43.5MB
 */
 var numMovesStonesII = function (stones) {
    stones.sort((a, b) => a - b);
    const len = stones.length;

    const max = stones[len - 1] - stones[0] + 1 - len - Math.min(stones[1] - stones[0] - 1, stones[len - 1] - stones[len - 2] - 1);

    let min = max;

    for (let i = 0, j = 0; stones[i] + len - 1 <= stones[len - 1]; i++) {
        while (j + 1 < len && stones[j + 1] <= stones[i] + len - 1) {
            j++;
        }
        let cnt = len - j + i - 1;
        if (cnt === 1 && stones[j] - stones[i] + 1 === len - 1) {
            cnt = 2;
        }
        min = Math.min(min, cnt);
    }

    return [min, max]
};

