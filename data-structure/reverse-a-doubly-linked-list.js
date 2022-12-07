// Time Complexity is O(n)
// Here n is size of DoublyLinkedList

function reverse(llist) {
    let cur = llist;
    let prev = null;

    while (cur) {
        [prev, prev.prev, prev.next, cur] = [cur, cur.next, cur.prev, cur.next];
    }

    return prev;
}
