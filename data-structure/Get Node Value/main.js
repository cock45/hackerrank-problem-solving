// Time Complexity is O(n)
// Here n is size of llist

function getNode(llist, positionFromTail) {
    let cur = llist;
    let prev = null;

    while (cur) {
        [prev, cur, prev.next] = [cur, cur.next, prev];
    }

    for (let i = 0; i < positionFromTail; i++) {
        prev = prev.next;
    }

    return prev.data;
}
