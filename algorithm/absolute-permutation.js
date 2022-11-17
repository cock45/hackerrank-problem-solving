// O(n)

function absolutePermutation(n, k) {
    if (n % (2 * k)) {
        return [-1];
    }

    const result = new Array(n).fill(null).map((v, i) => i + 1);
    if (k === 0) {
        return result;
    }

    const d = n / k / 2;
    for (let i = 0; i < d; i++) {
        for (let j = 0; j < k; j++) {
            const [k1, k2] = [2 * k * i + j, 2 * k * i + j + k];
            [result[k1], result[k2]] = [result[k2], result[k1]];
        }
    }

    return result;
}
