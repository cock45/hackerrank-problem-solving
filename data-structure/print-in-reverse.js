// Time Complexity is O(n)
// Here n is size of llist

function reversePrint(llist) {
    const arr = [];

    for (let cur = llist; cur; cur = cur.next) {
        arr.push(cur.data);
    }

    console.log(arr.reverse().join("\n"));
}
