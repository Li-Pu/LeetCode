/**
 * @param {number[]} heights
 * @return {number}
 * time: 3972ms space: 50MB
 */
var largestRectangleArea = function (heights) {
    let res = 0;
    const stack = [];

    for (let i = 0; i < heights.length; i++) {
        res = Math.max(res, heights[i]);
        for (let j = 0; j < stack.length; j++) {
            const area = Math.min(heights[i], heights[stack[j]]) * (i - (stack[j - 1] ?? -1));
            res = Math.max(res, area);
        }
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        stack.push(i);
    }

    return res;
};

