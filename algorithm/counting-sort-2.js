// Time Complexity is O(n)
// Here n is length of arr

function countingSort(arr) {
    const frequences = arr.reduce(
        (freq, value) => (++freq[value], freq),
        new Array(100).fill(0)
    );

    const result = [];

    for (let i = 0; i < frequences.length; i++) {
        for (let f = 0; f < frequences[i]; f++) {
            result.push(i);
        }
    }

    return result;
}
