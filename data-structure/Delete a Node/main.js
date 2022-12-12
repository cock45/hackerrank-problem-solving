// Time Complexity is O(position)

function deleteNode(llist, position) {
    if (position === 0) {
        return llist.next;
    }

    let curNode = llist;

    for (let i = 1; i < position; i++) {
        curNode = curNode.next;
    }

    curNode.next = curNode.next.next;

    return llist;
}
