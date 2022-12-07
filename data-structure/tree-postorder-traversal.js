// Time Complexity is O(n)
// Here n is numbers of Nodes in the Tree

function postOrder(root) {
    if (root) {
        postOrder(root.left);
        postOrder(root.right);
        process.stdout.write(root.data + " ");
    }
}
