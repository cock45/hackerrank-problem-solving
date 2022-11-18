// Time complexity - O(RC), here RC is the size of the grid.

function bomberMan(n, grid) {
    const [R, C] = [grid.length, grid[0].length];

    if (n === 1) {
        return grid;
    }

    if (n % 2 === 0) {
        return grid.map(() => "O".repeat(C));
    }

    const detonate = (state) => {
        const delta = [
            [0, 0],
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        const nextState = new Array(R)
            .fill(null)
            .map(() => new Array(C).fill("O"));

        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                if (state[i][j] === "O") {
                    for (const [dr, dc] of delta) {
                        const [x, y] = [i + dr, j + dc];
                        if (x >= 0 && x < R && y >= 0 && y < C) {
                            nextState[x][y] = ".";
                        }
                    }
                }
            }
        }

        return nextState;
    };

    const state = detonate(grid);

    return (n % 4 === 3 ? state : detonate(state)).map((row) => row.join(""));
}
