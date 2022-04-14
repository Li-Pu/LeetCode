var StockSpanner = function () {
    this._stack = []
    this._index = 0
};

/** 
 * @param {number} price
 * @return {number}
 * time: 220ms space: 51.2Mb
 */
StockSpanner.prototype.next = function (price) {
    let res = 0;
    while (this._stack.length > 0 && this._stack[this._stack.length - 1].value <= price) {
        this._stack.pop();
    }
    res = this._index - (this._stack.length > 0 ? this._stack[this._stack.length - 1].index : -1);
    this._stack.push({ index: this._index++, value: price });
    return res;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

