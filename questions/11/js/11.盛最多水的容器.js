/**
 * @param {number[]} height
 * @return {number}
 * time: 80ms space: 48MB
 */
var maxArea = function (height) {
    let result = 0, left = 0, right = height.length - 1;
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        if (area > result) {
            result = area;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;
};
