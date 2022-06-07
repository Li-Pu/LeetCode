/**
 * @param {TreeNode} root
 * @return {boolean}
 * time: 72ms space: 43.7MB
 */
var isSymmetric = function (root) {
    const isSymmetricNodes = function (node1, node2) {
        if (node1 === null || node2 === null) {
            return node1 === node2;
        }

        return (
            node1.val === node2.val &&
            isSymmetricNodes(node1.left, node2.right) &&
            isSymmetricNodes(node1.right, node2.left)
        );
    };

    return isSymmetricNodes(root.left, root.right);
};
