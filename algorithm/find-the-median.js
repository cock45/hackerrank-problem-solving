// Time Complexity is O(n)
// Here n is length of arr

function findMedian(arr) {
    const n = Math.ceil(arr.length / 2);

    function quickSelect(n, subArr) {
        if (n === 1 && subArr.length === 1) {
            return subArr[0];
        }

        let L = [],
            R = [];
        const pivot = Math.floor(Math.random() * subArr.length);

        for (const val of subArr) {
            if (val > subArr[pivot]) {
                R.push(val);
            } else {
                L.push(val);
            }
        }

        if (
            L.length === n ||
            (L.length > n && L.every((value) => value === subArr[pivot]))
        ) {
            return subArr[pivot];
        } else if (L.length < n) {
            return quickSelect(n - L.length, R);
        } else {
            return quickSelect(n, L);
        }
    }

    return quickSelect(n, arr);
}
