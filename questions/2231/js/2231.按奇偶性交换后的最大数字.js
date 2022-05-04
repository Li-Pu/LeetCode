/**
 * @param {number} num
 * @return {number}
 * time: 60ms space: 41.5MB
 */
 var largestInteger = function (num) {
    const odd = [], even = [], isOdd = [];

    while (num > 0) {
        const t = num % 10;
        if (t % 2 === 0) {
            even.push(t);
            isOdd.push(false);
        } else {
            odd.push(t);
            isOdd.push(true);
        }
        num = Math.floor(num / 10);
    }

    odd.sort((a, b) => b - a)
    even.sort((a, b) => b - a)
    
    let ret = 0;
    while (isOdd.length > 0) {
        const curIsOdd = isOdd.pop();
        if (curIsOdd) {
            ret = ret * 10 + odd.shift();
        } else {
            ret = ret * 10 + even.shift();
        }
    }

    return ret;
};

