// Time Complexity is O(n^2);

function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] <= arr[j + 1]) {
                console.log(arr.join(" "));
                break;
            } else {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            if (j === 0) {
                console.log(arr.join(" "));
                break;
            }
        }
    }
}
