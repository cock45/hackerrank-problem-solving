function printLinkedList(head) {
  let cur = head;

  while (cur) {
    console.log(cur.data);
    cur = cur.next;
  }
}
