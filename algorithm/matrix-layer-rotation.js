// Time Complexity is O(nm)
// Here n, m are row and col number of matrix

function matrixRotation(matrix, r) {
    const [m, n] = [matrix.length, matrix[0].length];
    const result = new Array(m).fill(null).map(() => new Array(n).fill(0));

    for (let dp = 0; 2 * dp < m && 2 * dp < n; dp++) {
        const layer = [];

        for (let y = dp; y < m - dp - 1; y++) {
            layer.push([y, dp]);
        }

        for (let x = dp; x < n - dp - 1; x++) {
            layer.push([m - dp - 1, x]);
        }

        for (let y = m - dp - 1; y > dp; y--) {
            layer.push([y, n - dp - 1]);
        }

        for (let x = n - dp - 1; x > dp; x--) {
            layer.push([dp, x]);
        }

        for (let k = 0; k < layer.length; k++) {
            const [y, x] = layer[k];
            const [ny, nx] = layer[(r + k) % layer.length];
            result[ny][nx] = matrix[y][x];
        }
    }

    result.map((row) => console.log(row.join(" ")));
}
