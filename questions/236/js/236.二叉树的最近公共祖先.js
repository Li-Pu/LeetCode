/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * time: 40008ms space: 52.5MB
 */
var lowestCommonAncestor = function (root, p, q) {
    const getPath = (node, target) => {
        if (node.val === target.val) {
            return [node];
        }
        if (node.left) {
            const path = getPath(node.left, target);
            if (path) {
                return [node, ...path];
            }
        }
        if (node.right) {
            const path = getPath(node.right, target);
            if (path) {
                return [node, ...path];
            }
        }
        return null;
    };

    const pPath = getPath(root, p);
    const qPath = getPath(root, q);

    if (pPath && qPath) {
        let i = 0;
        while (i < pPath.length && i < qPath.length && pPath[i] === qPath[i]) {
            i++;
        }
        return pPath[i - 1];
    }

    return null;
};
