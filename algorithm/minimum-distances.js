// O(n), n is length of a

function minimumDistances(a) {
    // Write your code here
    let mini = a.length;

    const indicesOfSortedA = a
        .map((value, index) => [value, index])
        .sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < a.length; i++) {
        if (indicesOfSortedA[i][0] === indicesOfSortedA[i - 1][0]) {
            const dist = indicesOfSortedA[i][1] - indicesOfSortedA[i - 1][1];
            if (dist < mini) {
                mini = dist;
            }
        }
    }

    return mini < a.length ? mini : -1;
}
