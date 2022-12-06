// Time Complexity is O(n)
// Here n is size of SinglyLinkedList

function reverse(llist) {
    let cur = llist,
        prev = null;

    while (cur) {
        [prev, cur, prev.next] = [cur, cur.next, prev];
    }

    return prev;
}
