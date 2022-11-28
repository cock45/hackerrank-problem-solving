// Time Complexity is O(n^2)
// Here n is length of arr

function quickSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const value = arr[i];

        for (let j = i - 1; j >= 0 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
            arr[j] = value;
        }
    }

    return arr;
}
