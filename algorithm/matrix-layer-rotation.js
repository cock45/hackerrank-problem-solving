// Time Complexity is O(nm)
// Here n, m are row and col number of matrix

function matrixRotation(matrix, r) {
    const [row, col] = [matrix.length, matrix[0].length];
    const result = new Array(row).fill(null).map(() => new Array(col).fill(0));

    for (let layer = 0; 2 * layer < row && 2 * layer < col; layer++) {
        const circle = [];

        for (let y = layer; y < row - layer - 1; y++) {
            circle.push([y, layer]);
        }

        for (let x = layer; x < col - layer - 1; x++) {
            circle.push([row - layer - 1, x]);
        }

        for (let y = row - layer - 1; y > layer; y--) {
            circle.push([y, col - layer - 1]);
        }

        for (let x = col - layer - 1; x > layer; x--) {
            circle.push([layer, x]);
        }

        for (let k = 0; k < circle.length; k++) {
            const [y, x] = circle[k];
            const [ny, nx] = circle[(r + k) % circle.length];
            result[ny][nx] = matrix[y][x];
        }
    }

    result.map((row) => console.log(row.join(" ")));
}
