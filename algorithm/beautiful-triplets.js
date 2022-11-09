// O(n), n is length of array arr

function beautifulTriplets(d, arr) {
    // Write your code here
    const barr = arr.reduce(
        (barr, value) => (barr[value % d].push(Number(value)), barr),
        new Array(d).fill(null).map(() => [])
    );

    let count = 0;
    let sameValueCount = 0;

    for (let row of barr) {
        for (let i = 1; i < row.length - 1; i++) {
            if (row[i] === row[i - 1] + d && row[i + 1] === row[i] + d) {
                count += 1 + sameValueCount;
                sameValueCount = 0;
            }

            if (row[i - 1] === row[i]) {
                sameValueCount++;
            }
        }
    }

    return count;
}
