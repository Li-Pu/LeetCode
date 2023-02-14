/**
 * @param {number[]} hours
 * @return {number}
 * time: 2988ms space: 42.8MB
 */
var longestWPI = function(hours) {
    const len = hours.length;
    let result = 0, tmp = 0;
    for(let i = 0; i < len; i++) {
        tmp = hours[i] > 8 ? 1 : 0;
        if (tmp * 2 > 1 && result < 1) {
            result = 1;
        }
        for(let j = i + 1; j < len; j++) {
            tmp = tmp + (hours[j] > 8 ? 1 : 0);
            if(tmp * 2 > j - i + 1 && j - i + 1 > result){
                result = j - i + 1;
            }
        }
    }
    return result;
};
