/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * time: 72ms space: 51.1Mb
 */
var maxPathSum = function (root) {
    const tMaxSum = (node) => {
        const ret = [0, null];

        if (node) {
            ret[0] = ret[1] = node.val
            const leftMaxSum = tMaxSum(node.left);
            const rightMaxSum = tMaxSum(node.right);

            ret[0] = node.val + Math.max(0, leftMaxSum[0], rightMaxSum[0]);
            ret[1] = Math.max(
                leftMaxSum[1] === null ? node.val : leftMaxSum[1],
                rightMaxSum[1] === null ? node.val : rightMaxSum[1],
                node.val + Math.max(0, leftMaxSum[0]) + Math.max(rightMaxSum[0], 0)
            );
        }

        return ret;
    }

    return Math.max(...tMaxSum(root))
};

