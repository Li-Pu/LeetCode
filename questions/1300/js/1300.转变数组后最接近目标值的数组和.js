/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 * time: 80ms space: 43MB
 */
var findBestValue = function(arr, target) {
    const arr1 = [...arr, 0].sort((a, b) => a - b);
    let sum = 0;
    for(let i = 0; i< arr1.length - 1; i++) {
        sum += arr1[i]
        const avg = Math.floor((target - sum) / (arr1.length - 1 - i) + 0.49)
        if(avg < arr1[i + 1]){
            return avg;
        }
    }
    return arr1[arr1.length - 1];
};