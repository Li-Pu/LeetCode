/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 * time: 76ms space: 41.9MB
 */
var canChoose = function (groups, nums) {
    const nLen = nums.length;
    let nIndex = 0, i = 0, j = 0;
    const check = (arr) => {
        const len = arr.length;
        if (len > nLen - nIndex) {
            return false;
        }
        for (let i = 0; i < len; i++){
            if (arr[i] !== nums.at(nIndex + i)) {
                return false;
            }
        }
        return true;
    }
    for (i = 0; i < groups.length && nIndex < nLen; i++){
        while (!check(groups[i])) {
            if (nIndex === nLen) {
                return false;
            }
            nIndex++;
        }
        nIndex += groups[i].length;
    }
    return i === groups.length;
};
