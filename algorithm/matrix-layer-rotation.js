// Time Complexity is O(nm)
// Here n, m are row and col number of matrix

function matrixRotation(matrix, r) {
    const [row, col] = [matrix.length, matrix[0].length];
    const result = new Array(row).fill(null).map(() => new Array(col).fill(0));

    for (let layer = 0; 2 * layer < row && 2 * layer < col; layer++) {
        const circle = [];

        for (let i = layer; i < row - layer - 1; i++) {
            circle.push([i, layer]);
        }

        for (let i = layer; i < col - layer - 1; i++) {
            circle.push([row - layer - 1, i]);
        }

        for (let i = row - layer - 1; i > layer; i--) {
            circle.push([i, col - layer - 1]);
        }

        for (let i = col - layer - 1; i > layer; i--) {
            circle.push([layer, i]);
        }

        for (let k = 0; k < circle.length; k++) {
            const [i, j] = circle[k];
            const [ni, nj] = circle[(r + k) % circle.length];
            result[ni][nj] = matrix[i][j];
        }
    }

    result.map((row) => console.log(row.join(" ")));
}
