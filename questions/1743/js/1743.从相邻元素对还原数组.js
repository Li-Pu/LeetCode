/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 * time: 384ms space: 90.7MB
 */
var restoreArray = function (adjacentPairs) {
    const mp = new Map();
    adjacentPairs.forEach(([a, b]) => {
        if (!mp.has(a)) {
            mp.set(a, [b])
        } else {
            mp.get(a).push(b)
        }
        if (!mp.has(b)) {
            mp.set(b, [a])
        } else {
            mp.get(b).push(a)
        }
    })
    const result = [];
    let prev, cur, next;
    for (let key of mp.keys()) {
        if (mp.get(key).length === 1) {
            result.push(key)
            prev = key
            cur = mp.get(key)[0]
            break
        }
    }
    while (mp.get(cur).length > 1) {
        result.push(cur)
        const [a, b] = mp.get(cur)
        next = a + b - prev
        prev = cur
        cur = next
    }
    result.push(cur);
    return result;
};