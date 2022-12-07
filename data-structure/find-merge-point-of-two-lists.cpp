// Time Complexity is O(n + m)
// Here n, m is size of llist1 and llist2

int findMergeNode(SinglyLinkedListNode *head1, SinglyLinkedListNode *head2)
{
    SinglyLinkedListNode *n1 = head1, *n2 = head2;

    while (n1 && n2)
    {
        if (n1 == n2)
        {
            return n1->data;
        }

        n1 = n1->next;
        n2 = n2->next;

        if (!n1)
        {
            n1 = head2;
        }

        if (!n2)
        {
            n2 = head1;
        }

        if (!n1 && !n2)
        {
            return -1;
        }
    }

    return 0;
}