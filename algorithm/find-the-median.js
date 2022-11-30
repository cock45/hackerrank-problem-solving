// Time Complexity is O(n)
// Here n is length of arr

function findMedian(arr) {
    let n = Math.ceil(arr.length / 2);
    let mid = arr[0];

    while (arr.length !== n && !arr.every((v) => v === mid)) {
        const pivot = Math.floor(Math.random() * arr.length);
        mid = arr[pivot];

        const L = [],
            R = [];
        for (const val of arr) {
            if (val > mid) {
                R.push(val);
            } else {
                L.push(val);
            }
        }

        if (L.length === n) {
            return mid;
        } else if (L.length < n) {
            arr = R;
            n -= L.length;
        } else {
            arr = L;
        }
    }

    return mid;
}
