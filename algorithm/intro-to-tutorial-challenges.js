// Time Complexity is O(logn), n is length of arr

function introTutorial(V, arr) {
    function binarySearch(arr, x, low, high) {
        if (low > high) {
            return -1;
        }

        const mid = Math.floor((low + high) / 2);

        if (x === arr[mid]) {
            return mid;
        }

        if (x > arr[mid]) {
            return binarySearch(arr, x, mid + 1, high);
        }

        return binarySearch(arr, x, low, mid);
    }

    return binarySearch(arr, V, 0, arr.length - 1);
}
