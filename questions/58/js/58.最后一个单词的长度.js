/**
 * @param {string} s
 * @return {number}
 * time: 56ms space: 41.2MB
 */
var lengthOfLastWord = function(s) {
    let len = s.length -1;
    let result = -1;
    while (len >= 0 && (s[len] !== ' ' || result === -1)) {
        if (s[len] !== ' ') {
            if (result === -1) {
                result++;
            }
            result++;
        }
        len--;
    }
    return result === - 1 ? 0 : result;
};

