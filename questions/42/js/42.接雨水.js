/**
 * @param {number[]} height
 * @return {number}
 * time: 64ms space: 43.2MB
 */
 var trap = function (height) {
    let res = 0;
    const stack = [];
    let min = 0;
    for (let i = 0; i < height.length; i++) {
        while (stack.length > 0) {
            const index = stack[stack.length - 1];
            const tMin = Math.min(height[i], height[index]);
            if (tMin > min) {
                res += (tMin - min) * (i - index - 1);
                min = tMin;
            }
            if (height[stack[stack.length - 1]] <= height[i]) {
                stack.pop();
            } else {
                break
            }
        }
        min = Math.min(min, height[i]);
        stack.push(i);
    }
    return res;
};

