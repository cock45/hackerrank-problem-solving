// O(nlogn), n is length of arr

function almostSorted(arr) {
    function mismatch(start, end, direction) {
        let [h, t] = [-1, -1];
        for (let i = start; i < end; i++) {
            if ((arr[i] - arr[i + 1]) * direction < 0) {
                h = i;
                break;
            }
        }

        for (let i = end; i > start; i--) {
            if ((arr[i] - arr[i - 1]) * direction > 0) {
                t = i;
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
