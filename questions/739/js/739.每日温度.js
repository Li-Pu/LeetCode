/**
 * @param {number[]} temperatures
 * @return {number[]}
 * time: 188ms space: 59.3MB
 */
 var dailyTemperatures = function (temperatures) {
    const res = Array(temperatures.length).fill(0);
    for (let i = 1; i < temperatures.length; i++){
        let j = i - 1;
        while (j >= 0 && temperatures[j] < temperatures[i]) {
            if (res[j] === 0) {
                res[j] = i - j;
            }
            j--;
        }
    }
    return res;
};

