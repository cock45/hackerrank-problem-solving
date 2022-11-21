// Time Complexity is O(logn), n is length of arr

function introTutorial(V, arr) {
    let [low, high] = [0, arr.length - 1];

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === V) {
            return mid;
        }

        if (V > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (arr[high] === V) {
        return high;
    }

    return -1;
}
