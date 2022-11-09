// O(n), n is length of array arr

function beautifulTriplets(d, arr) {
    const barr = new Array(d).fill(null).map(() => []);
    const carr = new Array(d).fill(null).map(() => []);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            barr[arr[i] % d].push(Number(arr[i]));
            carr[arr[i] % d].push(1);
        } else {
            ++carr[arr[i] % d][barr[arr[i] % d].length - 1];
        }
    }

    let count = 0;

    for (let i = 0; i < barr.length; i++) {
        for (let j = 0; j < barr[i].length; j++) {
            if (
                barr[i][j] === barr[i][j - 1] + d &&
                barr[i][j + 1] === barr[i][j] + d
            ) {
                count += carr[i][j - 1] * carr[i][j] * carr[i][j + 1];
            }
        }
    }

    return count;
}
