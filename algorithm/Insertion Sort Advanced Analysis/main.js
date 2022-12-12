// Time Complexity is O(nlogm)
// Here n is length of |arr|
// And m is maximum number in |arr|

function insertionSort(arr) {
    const M = Math.max(...arr);
    const c = new Array(M + 1).fill(0);

    function sum(index) {
        let sum = 0;
        while (index > 0) {
            sum += c[index];
            index -= index & -index;
        }
        return sum;
    }

    function update(n, index, value) {
        while (index <= n) {
            c[index] += value;
            index += index & -index;
        }
    }

    const N = arr.length;
    let result = (N * (N - 1)) / 2;
    for (let i = 0; i < N; i++) {
        result -= sum(arr[i]);
        update(M, arr[i], 1);
    }

    return result;
}
