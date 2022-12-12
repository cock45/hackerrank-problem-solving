// Time Complexity is O(n)
// Here n is size of llist

function removeDuplicates(llist) {
    let prev = llist;
    let cur = llist.next;

    while (cur) {
        if (cur.data === prev.data) {
            prev.next = cur.next;
        } else {
            prev = cur;
        }
        cur = cur.next;
    }

    return llist;
}
