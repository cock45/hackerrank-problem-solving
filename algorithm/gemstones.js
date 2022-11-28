// Time Complexity is O(nm)
// Here n is length of arr
// And m is length of arr[i]

function gemstones(arr) {
    const freq = new Array(26).fill(0);

    for (const rock of arr) {
        for (const letter of new Set(rock)) {
            ++freq[letter.charCodeAt(0) - 0x61];
        }
    }

    return freq.filter((f) => f === arr.length).length;
}
