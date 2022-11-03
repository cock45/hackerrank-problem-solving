// O(|p|)

function permutationEquation(p) {
    // Write your code here
    const xToY = new Array(p.length).fill(0);

    for (let i = 0; i < p.length; i++) {
        const yToX = p[p[i] - 1];
        xToY[yToX - 1] = i + 1;
    }

    return xToY;
}
