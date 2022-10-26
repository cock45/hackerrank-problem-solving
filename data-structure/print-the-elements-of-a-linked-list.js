function printLinkedList(head) {
  for (let cur = head; cur !== null; cur = cur.next) {
    console.log(cur.data);
  }
}
