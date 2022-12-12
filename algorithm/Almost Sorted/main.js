// O(|arr|)

function almostSorted(arr) {
    function mismatch(start, end, direction) {
        let h, t;
        for (let h = start; h < end; h++) {
            if ((arr[h] - arr[h + 1]) * direction < 0) {
                break;
            }
        }

        for (let t = end; t > start; t--) {
            if ((arr[t] - arr[t - 1]) * direction > 0) {
                break;
            }
        }

        return [h, t];
    }

    const [head, tail] = mismatch(0, arr.length - 1, -1);

    if (head >= tail) {
        return console.log("yes");
    }

    let [h, t] = mismatch(head + 1, tail - 1, -1);
    if (h >= t) {
        if (
            (head === 0 || arr[head - 1] < arr[tail]) &&
            (tail === arr.length - 1 || arr[head] < arr[tail + 1]) &&
            arr[tail] <= arr[head + 1] &&
            arr[head] >= arr[tail - 1]
        ) {
            return console.log(`yes\nswap ${head + 1} ${tail + 1}`);
        }
    }

    [h, t] = mismatch(head, tail, 1);
    if (h >= t) {
        if (
            (tail === arr.length - 1 || arr[head] <= arr[tail + 1]) &&
            (head === 0 || arr[tail] >= arr[head - 1])
        ) {
            return console.log(`yes\nreverse ${head + 1} ${tail + 1}`);
        }
    }

    return console.log("no");
}
