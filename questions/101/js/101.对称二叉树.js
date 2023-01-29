/**
 * @param {TreeNode} root
 * @return {boolean}
 * time: 64ms space: 43.5MB
 */
var isSymmetric = function (root) {
    const map = [[root.left, root.right]];

    while (map.length > 0) {
        const [node1, node2] = map.shift();
        if (node1 === null && node2 === null) continue;
        if (node1 === null || node2 === null) return false;
        if (node1.val !== node2.val) return false;
        map.push([node1.left, node2.right]);
        map.push([node2.left, node1.right]);
    }

    return true;
};

    return isSymmetricNodes(root.left, root.right);
};
