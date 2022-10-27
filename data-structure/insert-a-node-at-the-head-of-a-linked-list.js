function insertNodeAtHead(head, data) {
  let cur = new SinglyLinkedListNode(data);

  cur.next = head;
  head = cur;

  return head;
}
