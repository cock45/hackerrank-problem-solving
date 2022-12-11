// Time Complexity is O(n^2logn)
// Here n is length of grid

function gridChallenge(grid) {
    const sorted = grid.map((row) => Array.from(row).sort());

    for (let i = 1; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length; j++) {
            if (sorted[i][j] < sorted[i - 1][j]) {
                return "NO";
            }
        }
    }

    return "YES";
}
