// Time Complexity is O(nlogn)
// Here n is length of arr

function icecreamParlor(m, arr) {
    const indexed_arr = arr.map((v, i) => [v, i + 1]).sort(([a], [b]) => a - b);

    let head = 0,
        tail = arr.length - 1;

    while (head < tail) {
        const a = indexed_arr[head];
        const b = indexed_arr[tail];

        if (a[0] + b[0] === m) {
            return [a[1], b[1]].sort((a, b) => a - b);
        } else if (a[0] + b[0] > m) {
            tail--;
        } else {
            head++;
        }
    }
}
