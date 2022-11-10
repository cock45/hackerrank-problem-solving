// O(log m (n/c))

function chocolateFeast(n, c, m) {
    let result = 0;
    let bars = Math.floor(n / c);
    let wrappers = bars;

    while (bars) {
        result += bars;
        bars = Math.floor(wrappers / m);
        wrappers = bars + (wrappers % m);
    }

    return result;
}
