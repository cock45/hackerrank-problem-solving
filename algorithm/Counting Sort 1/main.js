// Time Complexity is O(n)
// Here n is the number of items in arr

function countingSort(arr) {
    return arr.reduce(
        (freq, value) => (++freq[value], freq),
        new Array(100).fill(0)
    );
}
