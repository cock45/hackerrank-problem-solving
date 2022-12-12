// Time Complexity is O(n)
// Here n is length of arr

function countingSort(arr) {
    return arr
        .reduce((freq, value) => (++freq[value], freq), new Array(100).fill(0))
        .map((value, index) => new Array(value).fill(index))
        .flat();
}
