/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 * time: 60ms space: 43.2MB
 */
 var btreeGameWinningMove = function (root, n, x) {

     const findNode = (val, node) => {
        if (!node || node.val === val) {
            return node;
        }
        return findNode(val, node.left) || findNode(val, node.right);
    }

    const childrenCount = (node) => {
        if (!node || node.val === null) {
            return 0;
        }
        return 1 + childrenCount(node.left) + childrenCount(node.right);
    }

    const tNode = findNode(x, root);
    const leftCount = childrenCount(tNode.left), rightCount = childrenCount(tNode.right);

    if (leftCount > n / 2 || rightCount > n / 2) {
        return true;
    } else if (tNode !== root && leftCount + rightCount + 1 <= n / 2) {
        return true;
    }

    return false;
};
