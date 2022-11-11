// O(N), N is length of B

function fairRations(B) {
    // Write your code here
    if (B.filter((value) => value & 1).length & 1) {
        return "NO";
    }

    const oddPositions = [];
    for (let index in B) {
        if (B[index] & 1) {
            oddPositions.push(index);
        }
    }

    let result = 0;
    for (let i = 0; i < oddPositions.length; i++) {
        if (i & 1) {
            result += 2 * (oddPositions[i] - oddPositions[i - 1]);
        }
    }

    return result;
}
