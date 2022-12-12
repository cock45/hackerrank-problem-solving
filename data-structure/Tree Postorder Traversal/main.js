// Time Complexity is O(n)
// Here n is numbers of Nodes in the Tree

function postOrder(root) {
    function* traversal(root) {
        if (!root) {
            return;
        }

        yield* traversal(root.left);
        yield* traversal(root.right);
        yield root.data;
    }

    console.log([...traversal(root)].join(" "));
}
