// Time Complexity is O(n)
// Here n is number of Nodes in Tree

function inOrder(root) {
    function* traversal(root) {
        if (!root) {
            return;
        }

        yield* traversal(root.left);
        yield root.data;
        yield* traversal(root.right);
    }

    console.log([...traversal(root)].join(" "));
}
