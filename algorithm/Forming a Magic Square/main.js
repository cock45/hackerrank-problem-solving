// O(1)

function formingMagicSquare(s) {
    // Write your code here
    const possibleMatrixes = [
        [
            [4, 9, 2],
            [3, 5, 7],
            [8, 1, 6],
        ],
        [
            [2, 9, 4],
            [7, 5, 3],
            [6, 1, 8],
        ],
        [
            [8, 1, 6],
            [3, 5, 7],
            [4, 9, 2],
        ],
        [
            [6, 1, 8],
            [7, 5, 3],
            [2, 9, 4],
        ],
        [
            [4, 3, 8],
            [9, 5, 1],
            [2, 7, 6],
        ],
        [
            [8, 3, 4],
            [1, 5, 9],
            [6, 7, 2],
        ],
        [
            [2, 7, 6],
            [9, 5, 1],
            [4, 3, 8],
        ],
        [
            [6, 7, 2],
            [1, 5, 9],
            [8, 3, 4],
        ],
    ];
    let miniCost = (9 - 1) * 9;

    for (matrix of possibleMatrixes) {
        let cost = 0;

        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                cost += Math.abs(matrix[r][c] - s[r][c]);
            }
        }

        if (miniCost < cost) {
            miniCost = cost;
        }
    }

    return miniCost;
}
