/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * time: 72ms space: 43MB
 */
var addStrings = function (num1, num2) {
    let len1 = num1.length, len2 = num2.length;
    const len = Math.max(len1, len2) + 1;
    const ret = [];

    let addUp = 0;
    for (let i = 1; i < len; i++) {
        if (len1 >= i) {
            addUp += num1.charAt(len1 - i) - '0';
        }
        if (len2 >= i) {
            addUp += num2.charAt(len2 - i) - '0';
        }
        ret.push('' + addUp % 10);
        addUp = Math.floor(addUp / 10);
    }


    if (addUp !== 0) {
        ret.push('' + addUp);
    }

    return ret.reverse().join('');
};