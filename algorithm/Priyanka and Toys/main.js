// O(n)
// Here n is 10 000

function toys(w) {
    const M = 1e4;
    const freq = w.reduce(
        (f, weight) => (++f[weight], f),
        new Array(M + 1).fill(0)
    );

    let min = -1,
        container = 0;
    for (let t = 0; t <= M; t++) {
        if (freq[t] > 0 && (min === -1 || (min > -1 && t > min + 4))) {
            min = t;
            container++;
        }
    }

    return container;
}
