/**
 * @param {number[]} temperatures
 * @return {number[]}
 * time: 172ms space: 62.9MB
 */
 var dailyTemperatures = function (temperatures) {
    const res = Array(temperatures.length).fill(0);
    const stck = [];
    for (let i = 0; i < temperatures.length; i++){
        const t = temperatures[i];
        while (stck.length > 0 && temperatures[stck[stck.length - 1]] < t) {
            const idx = stck.pop();
            res[idx] = i - idx;
        }
        stck.push(i);
    }
    return res;
};

