/**
 * @param {string} s
 * @return {boolean}
 * time: 60ms space: 41.3MB
 */
var isValid = function (s) {
    const len = s.length;

    if (len % 2 !== 0) {
        return false;
    }

    const brakets = [];

    for (let i = 0; i < len; i++) {
        const t = s[i];
        if (['(', '[', '{'].includes(t)) {
            brakets.push(t)
        } else if (
            (t === ')' && brakets.pop() === '(') ||
            (t === '}' && brakets.pop() === '{') ||
            (t === ']' && brakets.pop() === '[')
        ) {
            continue;
        } else {
            return false;
        }
    }

    return brakets.length === 0;
};
