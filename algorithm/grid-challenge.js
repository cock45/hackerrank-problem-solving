// Time Complexity is O(nm)
// Here n is numbers of rows and columns in grid

function gridChallenge(grid) {
    const gridByValues = grid.map((row) => {
        const freq = Array.from(row).reduce(
            (f, el) => (++f[el.charCodeAt(0) - 0x61], f),
            new Array(26).fill(0)
        );
        let sum = 0;
        return freq.map((v) => (sum += v));
    });

    for (let i = 0; i < 26; i++) {
        for (let j = 1; j < grid.length; j++) {
            if (gridByValues[j][i] > gridByValues[j - 1][i]) {
                return "NO";
            }
        }
    }

    return "YES";
}
