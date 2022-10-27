function insertNodeAtHead(head, data) {
  let cur = new SinglyLinkedListNode(data);

  cur.next = head;

  return cur;
}
