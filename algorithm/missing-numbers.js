// Time Complexity is O(n + m)
// Here n is length of arr
// And m is length of brr

function missingNumbers(arr, brr) {
    const min = Math.min(...brr);

    const freq = new Array(100).fill(0);

    for (const b of brr) {
        ++freq[b - min];
    }

    for (const a of arr) {
        --freq[a - min];
    }

    return freq.map((v, i) => (v > 0 ? i + min : 0)).filter((e) => e > 0);
}
