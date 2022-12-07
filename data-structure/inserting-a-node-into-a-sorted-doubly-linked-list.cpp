// Time Complexity is O(n)
// Here n is size of llist

DoublyLinkedListNode *sortedInsert(DoublyLinkedListNode *llist, int data)
{
    DoublyLinkedListNode *newNode = new DoublyLinkedListNode(data);

    if (llist->data >= data)
    {
        llist->prev = newNode;
        newNode->prev = nullptr;
        newNode->next = llist;
        return newNode;
    }

    DoublyLinkedListNode *cur = llist;

    while (cur->next)
    {
        if (cur->data <= data && cur->next->data >= data)
        {
            newNode->prev = cur;
            newNode->next = cur->next;
            cur->next = newNode;
            cur->next->prev = newNode;
            return llist;
        }
        cur = cur->next;
    }

    newNode->prev = cur;
    newNode->next = nullptr;
    cur->next = newNode;
    return llist;
}