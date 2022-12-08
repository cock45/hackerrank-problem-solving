// Time Complexity is O(n)
// Here n is number of Nodes in Tree

function inOrder(root) {
    if (root) {
        inOrder(root.left);
        process.stdout.write(root.data + " ");
        inOrder(root.right);
    }
}
