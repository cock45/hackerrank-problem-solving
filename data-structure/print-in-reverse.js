// Time Complexity is O(n)
// Here n is size of llist

function reversePrint(llist) {
    const arr = [];

    while (llist.next !== null) {
        arr.push(llist.data);
        llist = llist.next;
    }

    arr.push(llist.data);

    console.log(arr.reverse().join("\n"));
}
