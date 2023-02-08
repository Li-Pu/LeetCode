/**
 * @param {number[]} nums
 * @return {number}
 * time: 168ms space: 48.4MB
 */
var maximumUniqueSubarray = function(nums) {
    const sums = [0];
    const mp = new Map();
    let subS = 0;
    for(let i = 0; i< nums.length; i++) {
        let t = 0
        if(mp.get(nums[i])){
            const a = mp.get(nums[i]);
            if(a.length > 0){
                t = Math.max(a[a.length -1], t)
            }
        }
        if(i > 1 && mp.get(nums[i - 1])){
            const a = mp.get(nums[i - 1]);
            if(a.length > 1){
                const b = a[a.length - 2]
                if(b > t){
                    const c = mp.get(nums[i])
                    if(c && c.length > 0){
                       c[c.length - 1] = b
                    }else{
                        mp.set(nums[i], [b])
                    }
                    t = b
                }
            }
        }
        if(!mp.has(nums[i])){
            mp.set(nums[i], [0])
        }
        mp.get(nums[i]).push(i + 1)
        const sum = sums[i] + nums[i];
        sums.push(sum)
        const subSum = sums[i + 1] - sums[t];
        if(subSum > subS){
            subS = subSum
        }
    }
    return subS;
};