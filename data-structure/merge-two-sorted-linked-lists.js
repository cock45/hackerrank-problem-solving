// Time Complexity is O(n + m)
// Here n, m is the size of llist1, llist2

function mergeLists(head1, head2) {
    if (!head1) {
        return head2;
    }

    if (!head2) {
        return head1;
    }

    if (head1.data < head2.data) {
        head1.next = mergeLists(head1.next, head2);
        return head1;
    }

    head2.next = mergeLists(head1, head2.next);
    return head2;
}
