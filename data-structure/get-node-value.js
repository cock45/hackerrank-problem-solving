// Time Complexity is O(n)
// Here n is size of llist

function getNode(llist, positionFromTail) {
    const arr = [];

    while (llist) {
        arr.push(llist.data);
        llist = llist.next;
    }

    return arr.at(-positionFromTail - 1);
}
