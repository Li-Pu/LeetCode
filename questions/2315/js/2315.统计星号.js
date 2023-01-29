/**
 * @param {string} s
 * @return {number}
 * time: 64ms space: 41.4MB
 */
var countAsterisks = function (s) {
    let result = 0;
    let index = 0;
    let isCount = true;
    while(index < s.length) {
        const t = s[index];
        if(t === '*' && isCount){
            result++;
        }
        if(t === '|'){
            isCount = !isCount;
        }
        index++;
    }
    return result;
};