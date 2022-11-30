// Time Complexity is O(n)
// Here n is length of arr

function findMedian(arr) {
    const n = Math.ceil(arr.length / 2);

    function quickSelect(n, subArr, target) {
        if (subArr.every((value) => value === target)) {
            return target;
        }

        let L = [],
            R = [];
        const pivot = Math.floor(Math.random() * subArr.length);
        const x = subArr[pivot];

        for (const val of subArr) {
            if (val > subArr[pivot]) {
                R.push(val);
            } else {
                L.push(val);
            }
        }

        if (L.length === n) {
            return subArr[pivot];
        } else if (L.length < n) {
            return quickSelect(n - L.length, R, x);
        } else {
            return quickSelect(n, L, x);
        }
    }

    return quickSelect(n, arr, 0);
}
