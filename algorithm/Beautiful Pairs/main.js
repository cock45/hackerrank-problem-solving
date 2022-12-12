// O(n)

function beautifulPairs(A, B) {
    const M = 1e3;
    const [freqA, freqB] = [A, B].map((s) =>
        s.reduce((acc, v) => (++acc[v], acc), new Array(M + 1).fill(0))
    );

    let count = 0,
        bonus = -1;

    for (let i = 1; i <= M; i++) {
        count += Math.min(freqA[i], freqB[i]);
        if (freqA[i] !== freqB[i]) {
            bonus = 1;
        }
    }

    return count + bonus;
}
