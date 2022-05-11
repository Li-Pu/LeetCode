/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * time: 88ms space: 43.1MB
 */
var addStrings = function (num1, num2) {
    let len1 = num1.length, len2 = num2.length;
    const len = Math.max(len1, len2) + 1;
    const ret = new Array(len).fill(0);

    let addUp = 0;
    for (let i = 1; i < len; i++) {
        if (len1 >= i) {
            addUp += num1[len1 - i] - '0';
        }
        if (len2 >= i) {
            addUp += num2[len2 - i] - '0';
        }
        addUp
        ret[len - i] = '' + addUp % 10;
        addUp = Math.floor(addUp / 10);
    }


    if (addUp !== 0) {
        ret[0] = addUp;
    } else {
        ret.shift();
    }

    return ret.join('');
};

