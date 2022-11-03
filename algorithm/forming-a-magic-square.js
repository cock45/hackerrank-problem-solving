// O(1)

function formingMagicSquare(s) {
    // Write your code here
    const magicConstant = (9 * (9 + 1)) / 2 / 3;
    const centerOfmatrix = magicConstant / 3;

    const matchedRows = new Array(9).fill(0);
    for (let first = 1; first < centerOfmatrix; first++) {
        for (let third = centerOfmatrix + 1; third <= 9; third++) {
            const second = magicConstant - first - third;
            if (second > first && second < third) {
                ++matchedRows[first - 1];
                ++matchedRows[second - 1];
                ++matchedRows[third - 1];
            }
        }
    }

    const cornerValues = [];
    for (let i = 0; i < 9; i++) {
        if (matchedRows[i] === 3) {
            cornerValues.push(i + 1);
        }
    }

    const possibleCorners = [];
    for (let i = 0; i < 4; i++) {
        const corners = new Array(4).fill(0);
        corners[i] = cornerValues[0];
        corners[(i + 2) % 4] = cornerValues[3];

        corners[(i + 1) % 4] = cornerValues[1];
        corners[(i + 3) % 4] = cornerValues[2];
        possibleCorners.push([...corners]);

        corners[(i + 3) % 4] = cornerValues[1];
        corners[(i + 1) % 4] = cornerValues[2];
        possibleCorners.push([...corners]);
    }

    const possibleMatrixes = [];
    for (let i = 0; i < possibleCorners.length; i++) {
        const matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
        matrix[0][0] = possibleCorners[i][0];
        matrix[0][2] = possibleCorners[i][1];
        matrix[2][2] = possibleCorners[i][2];
        matrix[2][0] = possibleCorners[i][3];
        matrix[0][1] = magicConstant - matrix[0][0] - matrix[0][2];
        matrix[1][0] = magicConstant - matrix[0][0] - matrix[2][0];
        matrix[1][2] = magicConstant - matrix[0][2] - matrix[2][2];
        matrix[2][1] = magicConstant - matrix[2][0] - matrix[2][2];
        matrix[1][1] = centerOfmatrix;
        possibleMatrixes.push(matrix);
    }

    let miniCost = 3 * magicConstant;
    for (let i = 0; i < possibleMatrixes.length; i++) {
        let cost = 0;
        const matrix = possibleMatrixes[i];

        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                cost += Math.abs(matrix[r][c] - s[r][c]);
            }
        }

        miniCost = miniCost <= cost ? miniCost : cost;
    }

    return miniCost;
}
