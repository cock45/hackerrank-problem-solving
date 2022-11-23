// O(n)

function insertionSort1(n, arr) {
    if (n === 1) {
        console.log(arr.join(""));
    }

    const rightmost = arr[n - 1];
    let i = 0;

    for (i = n - 2; i > 0, arr[i] > rightmost; i--) {
        arr[i + 1] = arr[i];
        console.log(arr.join(" "));
    }

    arr[i + 1] = rightmost;
    console.log(arr.join(" "));
}
