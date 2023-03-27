/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * time: 104ms space: 41.1MB
 */
var countSubstrings = function (s, t) {
    const diffCount = (sIndex, tIndex, len) => {
        let count = 0;
        for (let i = 0; i < len && count <= 1; i++){
            if (s[sIndex + i] !== t[tIndex + i]) {
                count++;
                if (count > 1) {
                    break;
                }
            }
        }
        if (count > 1 || count === 0) {
            return false;
        }
        return true;
    }
    let result = 0;
    for (let i = 1; i <= Math.min(s.length, t.length); i++){
        for (let j = 0; j <= s.length - i; j++){
            for (let k = 0; k <= t.length - i; k++){
                if (diffCount(j, k, i)) {
                    result++;
                }
            }
        }
    }
    return result;
};
