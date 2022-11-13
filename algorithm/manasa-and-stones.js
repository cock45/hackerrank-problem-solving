// O(n)

function stones(n, a, b) {
    // Write your code here
    const [max, min] = [Math.max(a, b), Math.min(a, b)];
    const result = [min * (n - 1)];

    if (a === b) {
        return result;
    }

    for (let i = 1; i < n; i++) {
        result.push(result[i - 1] + (max - min));
    }

    return result;
}
