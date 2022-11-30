// Time Complexity is O(n)
// Here n is length of arr

function closestNumbers(arr) {
    const sorted = arr.sort((a, b) => a - b);
    let min = Infinity;
    const result = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] < min) {
            min = arr[i] - arr[i - 1];
            result.length = 0;
            result.push(arr[i - 1], arr[i]);
        } else if (arr[i] - arr[i - 1] === min) {
            result.push(arr[i - 1], arr[i]);
        }
    }

    return result;
}
