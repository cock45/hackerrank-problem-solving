// O(HW), H and W are numbers of Rows and Columns of A

function surfaceArea(A) {
    const [H, W] = [A.length, A[0].length];

    let result = 2 * H * W;

    for (let i = 0; i < H; i++) {
        result += A[i][0] + A[i][W - 1];

        for (let j = 0; j < W - 1; j++) {
            result += Math.abs(A[i][j] - A[i][j + 1]);
        }
    }

    for (let i = 0; i < W; i++) {
        result += A[0][i] + A[H - 1][i];

        for (let j = 0; j < H - 1; j++) {
            result += Math.abs(A[j][i] - A[j + 1][i]);
        }
    }

    return result;
}
