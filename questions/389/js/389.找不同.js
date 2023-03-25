/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * time: 92ms space: 43.1MB
 */
var findTheDifference = function (s, t) {
    const obj = {};
    for (let ch of s) {
        if (!(ch in obj)) {
            obj[ch] = 1;
        } else {
            obj[ch]++;
        }
    }
    for (let ch of t) {
        if (!(ch in obj) || obj[ch] === 0) {
            return ch;
        } else {
            obj[ch]--;
        }
    }
};
