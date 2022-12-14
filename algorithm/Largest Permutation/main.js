// O(n)

function largestPermutation(k, arr) {
    const n = arr.length;

    const indices = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        indices[arr[i]] = i;
    }

    for (let i = 0; i < k && i < n; i++) {
        if (arr[i] === n - i) {
            k++;
            continue;
        }
        const moveFrom = indices[n - i];
        const numberToExchange = arr[i];
        [arr[i], arr[moveFrom]] = [n - i, arr[i]];
        indices[numberToExchange] = moveFrom;
    }

    return arr;
}
