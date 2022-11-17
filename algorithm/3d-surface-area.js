// O(H * W), H and W are numbers of Rows and Columns of A

function surfaceArea(A) {
    // Write your code here
    const [H, W] = [A.length, A[0].length];
    let [front, top, side] = [0, 0, 0];

    top = H * W;

    for (let row of A) {
        for (let f = 0; f < W; f++) {
            if (f === 0) {
                front += row[f];
            } else if (row[f] > row[f - 1]) {
                front += row[f] - row[f - 1];
            }
        }
    }

    for (let i = 0; i < W; i++) {
        for (let j = 0; j < H; j++) {
            if (j === 0) {
                side += A[j][i];
            } else if (A[j][i] > A[j - 1][i]) {
                side += A[j][i] - A[j - 1][i];
            }
        }
    }

    return 2 * (front + top + side);
}
