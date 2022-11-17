// O(rc), r, c are number of rows and columns of grid

function bomberMan(n, grid) {
    const [r, c] = [grid.length, grid[0].length];

    if (n === 1) {
        return grid;
    } else if (n % 2 === 0) {
        return grid.map((row) => Array.from(row).fill("O").join(""));
    }

    let garr = grid.map((row) =>
        Array.from(row).map((value) => {
            if (value === "O") {
                return 1;
            }
            return 0;
        })
    );

    for (let s = 1; s <= (n - 2) % 4; s += 2) {
        const step = new Array(r).fill(null).map(() => new Array(c).fill(1));
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (garr[i][j] === 1) {
                    step[i][j] = 0;
                    if (i > 0) {
                        step[i - 1][j] = 0;
                    }
                    if (i < r - 1) {
                        step[i + 1][j] = 0;
                    }
                    if (j > 0) {
                        step[i][j - 1] = 0;
                    }
                    if (j < c - 1) {
                        step[i][j + 1] = 0;
                    }
                }
            }
        }
        [...garr] = [...step];
    }

    return garr.map((row) =>
        row
            .map((value) => {
                if (value === 1) {
                    return "O";
                }
                return ".";
            })
            .join("")
    );
}
