/**
 * @param {number[]} heights
 * @return {number}
 * time: 112ms space: 59.1MB
 */
var largestRectangleArea = function (heights) {
    let res = 0;
    const stack = [0];
    heights = [0, ...heights, 0]

    for (let i = 1; i < heights.length; i++) {
        res = Math.max(res, heights[i]);
        while (heights[stack[stack.length - 1]] > heights[i]) {
            const index = stack.pop();
            const area = heights[index] * (i - stack[stack.length - 1] - 1);
            res = Math.max(res, area);
        }
        stack.push(i);
    }

    return res;
};

