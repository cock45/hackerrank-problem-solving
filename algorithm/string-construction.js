// Time Complexity is O(|s|)

function stringConstruction(s) {
    const freq = new Array(26).fill(0);

    for (const letter of s) {
        freq[letter.charCodeAt(0) - 0x61] = 1;
    }

    return freq.filter((v) => v > 0).length;
}
