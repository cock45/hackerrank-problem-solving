// O(1)

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    if (
        y1 < y2 ||
        (y1 === y2 && m1 < m2) ||
        (y1 === y2 && m1 === m2 && d1 <= d2)
    ) {
        return 0;
    } else if (y1 === y2 && m1 === m2 && d1 > d2) {
        return 15 * (d1 - d2);
    } else if (y1 === y2 && m1 > m2) {
        return 500 * (m1 - m2);
    } else {
        return 10000;
    }
}
