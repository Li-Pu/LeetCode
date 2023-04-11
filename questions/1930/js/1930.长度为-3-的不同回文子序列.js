/**
 * @param {string} s
 * @return {number}
 * time: 588ms space: 48.1MB
 */
var countPalindromicSubsequence = function (s) {
    const obj = {}, len = s.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        const a = s.at(i);
        if (obj[a]) {
            continue;
        }
        const ai = {};
        for (let j = i + 1; j < len; j++) {
            const b = s.at(j);
            if (b in ai) {
                continue;
            }
            let k = j + 1;
            for (; k < len; k++) {
                const c = s.at(k);
                if (c === a) {
                    ai[b] = true;
                    count++;
                    break;
                }
            }
            if (k === len) {
                ai[b] = false;
            }
        }
        obj[a] = ai;
    }
    return count;
};
