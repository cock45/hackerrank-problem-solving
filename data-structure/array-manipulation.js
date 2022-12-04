// Time Complexity is O(n + m)
// Here n is length of array
// And m is length of queries

function arrayManipulation(n, queries) {
    const arr = new Array(n + 1).fill(0);

    for (const [a, b, k] of queries) {
        arr[a] += k;
        if (b < n) {
            arr[b + 1] -= k;
        }
    }

    for (let i = 1; i < n; i++) {
        arr[i + 1] += arr[i];
    }

    let max = 0;
    for (let i = 1; i < n + 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
