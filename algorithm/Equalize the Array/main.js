// O(|arr|)

function equalizeArray(arr) {
    const frequency = arr.reduce(
        (f, value) => (f[value - 1]++, f),
        new Array(100).fill(0)
    );

    return arr.length - Math.max(...frequency);
}
