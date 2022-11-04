// O(max{|s|, k / 2})

function nonDivisibleSubset(k, s) {
    if (k === 1 || s.length === 1) {
        return 1;
    }

    const freq = s.reduce(
        (f, value) => (f[value % k]++, f),
        Array(100).fill(0)
    );

    let result = Math.min(freq[0], 1);

    if (k % 2 === 0) {
        result += Math.min(freq[k / 2], 1);
    }

    for (let i = 1; i < Math.ceil(k / 2); i++) {
        result += Math.max(freq[i], freq[k - i]);
    }

    return result;
}
