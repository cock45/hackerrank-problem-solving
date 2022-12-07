// Time Complexity is O(n)
// Here n is size of llist / 2

bool has_cycle(SinglyLinkedListNode* head) {
    SinglyLinkedListNode* slow = head;
    SinglyLinkedListNode* fast = head;
    while (slow && fast && fast -> next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            return 1;
        }
    }
    return 0;
}