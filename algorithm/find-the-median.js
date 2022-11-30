// Time Complexity is O(n)
// Here n is length of arr

function findMedian(arr) {
    const partition = (low, high) => {
        const pivot = arr[high];
        let i = low;

        for (let j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }

        arr[high] = arr[i];
        arr[i] = pivot;

        return i;
    };

    let left = 0,
        right = arr.length - 1,
        k = (arr.length + 1) / 2;

    while (true) {
        const mid = partition(left, right);
        const len = mid - left + 1;

        if (len === k) {
            return arr[mid];
        } else if (len > k) {
            right = mid - 1;
        } else {
            left = mid + 1;
            k -= len;
        }
    }
}
