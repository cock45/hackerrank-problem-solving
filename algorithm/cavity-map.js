// O(n * n), n is length of grid

function cavityMap(grid) {
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i].split("");

        for (let j = 0; j < grid.length; j++) {
            if (
                i !== 0 &&
                i !== grid.length - 1 &&
                j !== 0 &&
                j !== grid.length - 1 &&
                row[j] > grid[i - 1][j] &&
                row[j] > grid[i + 1][j] &&
                row[j] > row[j - 1] &&
                row[j] > row[j + 1]
            ) {
                row[j] = "X";
            }
        }

        grid[i] = row.join("");
    }

    return grid;
}
