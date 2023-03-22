/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 * time: 88ms space: 43.7MB
 */
var flipgame = function (fronts, backs) {
    const mp = new Map();
    for (let i = 0; i < fronts.length; i++){
        if (fronts[i] === backs[i]) {
            mp.set(fronts[i], false);
        } else {
            if (!mp.has(fronts[i])) {
                mp.set(fronts[i], true);
            }
            if (!mp.has(backs[i])) {
                mp.set(backs[i], true);
            }
        }
    }
    const result = [...mp.keys()].filter(t => mp.get(t)).sort((a, b) => a - b);
    return result[0] ?? 0;
};
