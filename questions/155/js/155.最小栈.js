
// time: 112ms space: 49.4MB

var MinStack = function () {
    this.stack = new Array();
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    const minValue =
        this.stack.length > 0
            ? Math.min(this.stack[this.stack.length - 1][1], val)
            : val;
    this.stack.push([val, minValue]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1][0] : 0;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1][1] : 0;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
