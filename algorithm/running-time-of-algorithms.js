// Time Complexity is O(n^2)
// Here n is length of arr

function runningTime(arr) {
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        const target = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j + 1] < arr[j]) {
                arr[j + 1] = arr[j];
                arr[j] = target;
                count++;
            } else {
                break;
            }
        }
    }

    return count;
}
