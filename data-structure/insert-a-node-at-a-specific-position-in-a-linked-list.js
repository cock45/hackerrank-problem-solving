// Time Complexity is O(n)
// Here n is position

function insertNodeAtPosition(llist, data, position) {
    const newNode = new SinglyLinkedListNode(data);

    if (position === 0) {
        newNode.next === llist;
        return newNode;
    }

    let curNode = llist;

    for (let i = 1; i < position; i++) {
        curNode = curNode.next;
    }

    const temp = curNode.next;
    curNode.next = newNode;
    newNode.next = temp;

    return llist;
}
