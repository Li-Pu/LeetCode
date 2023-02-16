/**
 * time: 3804ms space:78.8MB
 */
var NumberContainers = function () {
    this._arr = [];
    this._mp = new Map();
};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {
    const t = this._arr[index];
    if (t) {
        let tIndex = this._mp.get(t);
        if (tIndex === index) {
            do {
                tIndex++;
            } while (tIndex < this._arr.length && this._arr[tIndex] !== t)
            if (tIndex < this._arr.length) {
                this._mp.set(t, tIndex);
            } else {
                this._mp.delete(t);
            }
        }
    }
    this._arr[index] = number;
    if (!this._mp.has(number) || this._mp.get(number) > index) {
        this._mp.set(number, index);
    }
};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
    return this._mp.get(number) ?? -1;
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
