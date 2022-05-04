/**
 * @param {number} num
 * @return {number}
 * time: 60ms space: 41MB
 */
var largestInteger = function (num) {
    const digits = [];

    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }

    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            if ((digits[j] - digits[i]) % 2 === 0 && digits[j] < digits[i]) {
                const t = digits[j];
                digits[j] = digits[i];
                digits[i] = t;
            }
        }
    }

    let ret = 0;
    while (digits.length > 0) {
        ret = ret * 10 + digits.pop();
    }

    return ret;
};

