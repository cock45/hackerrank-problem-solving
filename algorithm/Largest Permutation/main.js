// O(n)

function largestPermutation(k, arr) {
    let n = arr.length;

    const order = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        order[arr[i]] = i;
    }

    while (n && k) {
        const [i, j] = [arr.length - n, order[n--]];

        if (i === j) {
            continue;
        }

        order[arr[i]] = j;

        [arr[i], arr[j]] = [[arr[j]], [arr[i]]];

        k--;
    }

    return arr;
}
