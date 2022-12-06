// Time Complexity is O(n)
// Here n is size of SinglyLinkedList

function reverse(llist) {
    let curNode = llist;
    let prevNode = null;

    while (curNode) {
        const temp = curNode.next;
        curNode.next = prevNode;
        prevNode = curNode;
        curNode = temp;
    }

    return prevNode;
}
