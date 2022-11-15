// O(R * C * r * c), R, r and C, c, the number of rows in the search grid, pattern grid and the length of each row, pattern row string.

function gridSearch(G, P) {
    const [R, C, r, c] = [G.length, G[0].length, C.length, C[0].length];

    for (let i = 0; i <= R - r; i++) {
        for (let j = 0; j <= C - c; j++) {
            if (P.every((row, k) => G[i + k].startsWith(row, j))) {
                return "YES";
            }
        }
    }

    return "NO";
}
