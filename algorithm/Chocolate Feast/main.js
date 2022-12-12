// O(log m (n/c))

function chocolateFeast(n, c, m) {
    let result = Math.floor(n / c);
    let wrappers = result;

    while (wrappers >= m) {
        const free = Math.floor(wrappers / m);
        result += free;
        wrappers = (wrappers % m) + free;
    }

    return result;
}
