// Time Complexity is O(n)
// Here n is number of Nodes in the Tree

int height(Node *root)
{
    if (root == nullptr)
    {
        return -1;
    }

    return max(height(root->left), height(root->right)) + 1;
}