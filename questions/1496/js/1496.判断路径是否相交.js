/**
 * @param {string} path
 * @return {boolean}
 * time: 60ms space: 41.1MB
 */
var isPathCrossing = function(path) {
    const map = new Map();
    const has = (i, j) => {
        return map.has(i) && map.get(i).has(j);
    }
    const set = (i, j) => {
        if(!map.has(i)){
            map.set(i, new Map())
        }
        map.get(i).set(j, true);
    }
    const NESWObj = {
        N: [0, 1],
        E: [1, 0],
        S: [0, -1],
        W: [-1, 0]
    }
    let x = 0, y = 0;
    let index = 0;
    set(x, y);
    while(index < path.length) {
        const t = NESWObj[path[index]];
        x += t[0];
        y += t[1];
        if(has(x, y)){
            return true;
        }else{
            set(x, y);
        }
        index++;
    }
    return false;
};
