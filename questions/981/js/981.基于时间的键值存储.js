// time: 8636ms space: 83.8MB
var TimeMap = function () {
    this.mp = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.mp.has(key)) {
        this.mp.set(key, [[value, timestamp]])
    } else {
        this.mp.get(key).push([value, timestamp]);
    }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.mp.has(key)) {
        return '';
    }
    let rValue = '', rTimestamp = 0;
    for (let record of this.mp.get(key)) {
        const [value, tTimestamp] = record;
        if (tTimestamp <= timestamp && tTimestamp > rTimestamp) {
            rValue = value;
        }
    }
    return rValue;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
