// Time Complexity is O(n^2)
// Here n is length of arr

function runningTime(arr) {
    let time = 0;

    for (let i = 1; i < arr.length; i++) {
        const target = arr[i];
        let j = i - 1;
        while (j >= 0 && target < arr[j]) {
            arr[j + 1] = arr[j--];
            time++;
        }
        arr[j + 1] = target;
    }

    return time;
}
