/**
 * @param {number[]} amount
 * @return {number}
 * time: 68ms space: 41.3MB
 */
var fillCups = function(amount) {
    const [a, b, c] = amount.sort((a, b) => a - b);
    if(c > a + b) {
        return c;
    }
    return Math.ceil((a + b + c) / 2);
};
