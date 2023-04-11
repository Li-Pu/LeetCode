/**
 * @param {string} s
 * @return {number}
 * time: 572ms space: 51MB
 */
var countPalindromicSubsequence = function (s) {
    if (s.length < 3) {
        return 0;
    }
    let t = s.substring(0, 3);
    for (let i = 3; i < s.length; i++) {
        if (s.at(i) !== s.at(i - 1) || s.at(i) !== s.at(i - 2) || s.at(i) !== s.at(i - 3)) {
            t += s.at(i);
        }
    }
    const obj = {}, len = t.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        const a = t.at(i);
        if (obj[a]) {
            continue;
        }
        const ai = {};
        for (let j = i + 1; j < len; j++) {
            const b = t.at(j);
            if (ai[b]) {
                continue;
            }
            for (let k = j + 1; k < len; k++) {
                const c = t.at(k);
                if (c === a) {
                    ai[b] = true;
                    count++;
                    break;
                }
            }
        }
        obj[a] = ai;
    }
    return count;
};
