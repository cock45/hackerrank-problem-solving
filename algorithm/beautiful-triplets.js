// O(n), n is length of array arr

function beautifulTriplets(d, arr) {
    // Write your code here
    let count = 0;
    let i = 0,
        j = 0,
        k = 0;

    for (i = 0; i < arr.length - 2; i++) {
        while (j < arr.length && arr[j] - arr[i] < d) {
            j++;
        }
        if (j === arr.length) {
            break;
        }
        if (arr[j] - arr[i] === d) {
            while (k < arr.length && arr[k] - arr[j] < d) {
                k++;
            }
            if (k === arr.length) {
                break;
            }
            if (arr[k] - arr[j] === d) {
                count++;
            }
        }
    }

    return count;
}
