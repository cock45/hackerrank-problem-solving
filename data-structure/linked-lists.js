function insertNodeAtTail(head, data) {
  if (head === null) {
    return new SinglyLinkedListNode(data);
  }

  let cur = head;

  while (cur.next !== null) {
    cur = cur.next;
  }

  cur.next = new SinglyLinkedListNode(data);

  return head;
}
