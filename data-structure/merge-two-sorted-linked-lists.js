// Time Complexity is O(n + m)
// Here n, m is the size of llist1, llist2

function mergeLists(head1, head2) {
    const llist = new SinglyLinkedList();
    llist.head = new SinglyLinkedListNode(null);
    let head = llist.head;

    while (head1 && head2) {
        if (head1.data <= head2.data) {
            head.next = head1;
            head1 = head1.next;
        } else {
            head.next = head2;
            head2 = head2.next;
        }
        head = head.next;
    }

    head.next = head1 ? head1 : head2;

    return llist.head.next;
}
