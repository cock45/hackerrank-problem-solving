// O(nlogn), n is length of arr

function almostSorted(arr) {
    const sorted = [...arr].sort((a, b) => a - b);

    let diff = 0,
        [l, r] = [-1, -1];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sorted[i]) {
            diff++;
            if (l === -1) {
                l = i;
            } else {
                r = i;
            }
        }
    }

    if (diff === 0) {
        console.log("yes");
        return;
    }

    if (diff === 2 && arr[l] === sorted[r]) {
        console.log(`yes\nswap ${l + 1} ${r + 1}`);
        return;
    }

    if (diff > 2) {
        for (let i = l; i <= r; i++) {
            if (arr[i] !== sorted[r + l - i]) {
                console.log("no");
                return;
            }
        }
        console.log(`yes\nreverse ${l + 1} ${r + 1}`);
        return;
    }

    console.log("no");
}
