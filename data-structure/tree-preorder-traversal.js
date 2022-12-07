// Time Complexity is O(n)
// Here n is number of Nodes in the tree

function preOrder(root) {
    if (root) {
        process.stdout.write(root.data + " ");
        preOrder(root.left);
        preOrder(root.right);
    }
}
