// O(n)

function absolutePermutation(n, k) {
    const result = new Array(n).fill(0).map((value, index) => index + 1);

    if (k === 0) {
        return result;
    }

    if (n % (2 * k) === 0) {
        for (let i = 0; i < n; i += 2 * k) {
            for (let j = i; j < i + k; j++) {
                [result[j], result[j + k]] = [result[j + k], result[j]];
            }
        }

        return result;
    }

    return [-1];
}
