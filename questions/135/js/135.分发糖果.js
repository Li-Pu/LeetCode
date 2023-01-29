/**
 * @param {number[]} ratings
 * @return {number}
 * time: 124ms space: 52.5MB
 */
 var candy = function (ratings) {
    const ret = new Array(ratings.length).fill(1).map(() => new Array());
    for (let i = 0; i < ratings.length; i++) {
        if (i > 0 && ratings[i] > ratings[i - 1]) {
            ret[i].push(ret[i - 1][0] + 1);
        } else {
            ret[i].push(1);
        }
    }

    for (let i = ratings.length - 1; i >= 0; i--) {
        if (i < ratings.length - 1 && ratings[i] > ratings[i + 1]) {
            ret[i].push(ret[i + 1][1] + 1);
        } else {
            ret[i].push(1);
        }
    }

    return ret.map((arr) => Math.max(...arr)).reduce((a, b) => a + b, 0);
};
