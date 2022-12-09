// Time Complexity is O(n)
// Here n is number of Nodes in the Tree

int height(Node *root)
{
    if (root == nullptr)
    {
        return -1;
    }

    int left = height(root->left);
    int right = height(root->right);

    return max(left, right) + 1;
}