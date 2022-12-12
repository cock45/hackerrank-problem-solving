// Time Complexity is O(n)
// Here n is size of DoublyLinkedList

function reverse(llist) {
    let prev = null,
        cur = llist;

    while (cur) {
        [cur.prev, cur.next] = [cur.next, cur.prev];
        [prev, cur] = [cur, cur.prev];
    }

    return prev;
}
