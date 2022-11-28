// Time Complexity is O(n)
// Here n is length of arr

function quickSort(arr) {
    const left = [];
    const equal = [];
    const right = [];

    for (const value of arr) {
        if (value > arr[0]) {
            right.push(value);
        } else if (value < arr[0]) {
            left.push(value);
        } else {
            equal.push(value);
        }
    }

    return left.concat(equal, right);
}
