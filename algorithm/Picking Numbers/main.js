function pickingNumbers(a) {
    // Write your code here
    const frequences = a.reduce(
        (freq, cur) => (++freq[cur], freq),
        new Array(100).fill(0)
    );

    return Math.max(
        ...frequences
            .slice(0, -1)
            .map((freq, pos) => freq + frequences[pos + 1])
    );
}
