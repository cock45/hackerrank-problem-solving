function insertNodeAtHead(head, data) {
  let newNode = new SinglyLinkedListNode(data);

  newNode.next = head;

  return newNode;
}
