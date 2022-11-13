// O(n)

function stones(n, a, b) {
    // Write your code here
    if (a === b) {
        return [(n - 1) * a];
    }
    const result = [];
    const big = a > b ? a : b;
    const small = a < b ? a : b;

    for (let i = 0; i < n; i++) {
        result.push(i * big + (n - i - 1) * small);
    }

    return result;
}
