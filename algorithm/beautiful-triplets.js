// O(n), n is length of array arr

function beautifulTriplets(d, arr) {
    // Write your code here
    let count = 0;
    let i = 0,
        j = 0,
        k = 0;

    for (i = 0; i < arr.length - 2; i++) {
        while (arr[j] < arr[i] + d) {
            j++;
        }

        while (arr[k] < arr[j] + d) {
            k++;
        }

        if (arr[j] === arr[i] + d && arr[k] === arr[j] + d) {
            count++;
        }
    }

    return count;
}
