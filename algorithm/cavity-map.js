// O(n * n), n is length of grid

function cavityMap(grid) {
    const map = grid.map((row) => row.split(""));
    const delta = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    for (let r = 1; r < grid.length - 1; r++) {
        for (let c = 1; c < grid.length - 1; c++) {
            if (
                delta.every(([dr, dc]) => +grid[r][c] > +grid[r + dr][c + dc])
            ) {
                map[r][c] = "X";
            }
        }
    }

    return map.map((row) => row.join(""));
}
