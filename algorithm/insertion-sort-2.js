// Time Complexity is O(n^2);

function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++) {
        const value = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
            arr[j] = value;
        }
        console.log(arr.join(" "));
    }
}
