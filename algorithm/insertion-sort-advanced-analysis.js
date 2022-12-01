// Time Complexity is O(nlogm)
// Here n is length of |arr|
// And m is maximum number in |arr|

function insertionSort(arr) {
    const N = Math.max(...arr);
    const BITree = new Array(N + 1).fill(0);

    function getSum(index) {
        let sum = 0;
        while (index > 0) {
            sum += BITree[index];
            index -= index & -index;
        }
        return sum;
    }

    function updateBIT(n, index, value) {
        while (index <= n) {
            BITree[index] += value;
            index += index & -index;
        }
    }

    const M = arr.length;
    let result = (M * (M - 1)) / 2;
    for (let i = 0; i < M; i++) {
        result -= getSum(arr[i]);
        updateBIT(N, arr[i], 1);
    }

    return result;
}
