/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
    const timeParse = (time) => {
        const [a, b] = time.split(":")
        return Number(a) * 60 + Number(b);
    }
    const map = new Map();
    for(let i = 0; i< keyName.length; i++){
        const name = keyName[i], time = timeParse(keyTime[i])
        if(!map.has(name)){
            map.set(name, [time])
        }else{
            map.get(name).push(time)
        }
    }
    const result = [];
    for(let [k, v] of map.entries()){
        const times = v.sort((a, b) => a - b)
        if(times.length >= 3 && times.some((t, index) => index >= 2 && t - times[index - 2] <= 60)){
            result.push(k)
        }
    }
    result
    return result.sort();
};
