// O(n*log(n)), n is length of a

function minimumDistances(a) {
    // Write your code here
    let min = a.length;

    const indices = a
        .map((value, index) => [value, index])
        .sort(([a], [b]) => a - b);

    for (let i = 1; i < a.length; i++) {
        if (indices[i][0] === indices[i - 1][0]) {
            const dist = indices[i][1] - indices[i - 1][1];
            if (dist < min) {
                min = dist;
            }
        }
    }

    return min < a.length ? min : -1;
}
