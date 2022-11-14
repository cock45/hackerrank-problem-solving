// O(R * C * r * c), R, r and C, c, the number of rows in the search grid, pattern grid and the length of each row, pattern row string.

function gridSearch(G, P) {
    // Write your code here
    const [gr, gc] = [G.length, G[0].length];
    const [pr, pc] = [P.length, P[0].length];

    for (let r = 0; r <= gr - pr; r++) {
        for (let c = 0; c < gc; c++) {
            if (G[r].substr(c, pc) === P[0]) {
                let machedRows = 0;

                for (let p = 0; p < pr; p++) {
                    if (G[r + p].substr(c, pc) === P[p]) {
                        machedRows++;
                    }
                }

                if (machedRows === pr) {
                    return "YES";
                }
            }
        }
    }

    return "NO";
}
