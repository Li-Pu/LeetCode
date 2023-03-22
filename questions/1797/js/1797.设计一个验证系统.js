/**
 * @param {number} timeToLive
 * time: 184ms space: 51.9MB
 */
var AuthenticationManager = function (timeToLive) {
    this.timeToLive = timeToLive;
    this.map = new Map();
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
    this.map.set(tokenId, currentTime + this.timeToLive);
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
    const oldTimeToLive = this.map.get(tokenId);
    if (!oldTimeToLive || oldTimeToLive <= currentTime) {
        return;
    }
    this.map.set(tokenId, currentTime + this.timeToLive);
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
    let result = 0;
    [...this.map.entries()].forEach(([k, v]) => {
        if (v <= currentTime) {
            this.map.delete(k);
        } else {
            result++;
        }
    });
    return result;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
