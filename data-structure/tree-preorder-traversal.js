// Time Complexity is O(n)
// Here n is number of Nodes in the tree

function preOrder(root) {
    function* traversal(root) {
        if (!root) {
            return;
        }

        yield root.data;
        yield* traversal(root.left);
        yield* traversal(root.right);
    }
    console.log([...traversal(root)].join(" "));
}
