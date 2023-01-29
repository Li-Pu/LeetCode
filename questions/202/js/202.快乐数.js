/**
 * @param {number} n
 * @return {boolean}
 * time: 68ms space: 41.9Mb
 */
var isHappy = function (n) {
    const mp = new Map();
    let tn = n;

    while (tn !== 1) {
        let t = tn;
        tn = 0
        while (t !== 0) {
            const s = t % 10;
            tn += s * s;
            t = Math.floor(t / 10);
        }
        if (mp.has(tn)) {
            return false;
        }
        mp.set(tn, true)
    }

    return true;
};

