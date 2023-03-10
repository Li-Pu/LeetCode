/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 * time: 60ms space: 41.1MB
 */
var minimumNumbers = function (num, k) {
    for (let i = 0; i <= 10; i++) {
        if (i * k % 10 === num % 10 && i * k <= num) {
            if (i === 0 && num !== 0) {
                continue;
            }
            return i;
        }
    }
    return -1;
};
