function luckBalance(k, contests) {
    let count = 0,
        sum = 0;
    const sorted = [...contests].sort(([a], [b]) => b - a);

    for (const [L, T] of sorted) {
        if (T === 1) {
            count++;
        }
        sum += count > k && T === 1 ? -L : L;
    }

    return sum;
}
