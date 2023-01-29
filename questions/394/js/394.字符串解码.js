/**
 * @param {string} s
 * @return {string}
 * time: 60ms space: 40.9MB
 */
var decodeString = function (s) {
    let ret = s;
    const reg = /(\d+)\[([a-z]+)\]/g;
    while (reg.test(ret)) {
        ret = ret.replace(reg, (_, p1, p2) => {
            return p2.repeat(parseInt(p1));
        });
    }
    return ret;
};
