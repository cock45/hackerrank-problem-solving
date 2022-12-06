// Time Complexity is O(n)
// Here n is size of llist

function reversePrint(llist) {
    const arr = [];

    while (llist) {
        arr.push(llist.data);
        llist = llist.next;
    }

    console.log(arr.reverse().join("\n"));
}
