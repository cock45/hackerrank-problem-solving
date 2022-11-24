// O(n)

function insertionSort1(n, arr) {
    const rightmost = arr[n - 1];
    let i;

    for (i = n - 2; i >= 0 && arr[i] > rightmost; i--) {
        arr[i + 1] = arr[i];
        console.log(arr.join(" "));
    }

    arr[i + 1] = rightmost;
    console.log(arr.join(" "));
}
