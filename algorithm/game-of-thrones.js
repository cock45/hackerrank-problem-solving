// Time Complexity is O(|s|)

function gameOfThrones(s) {
    const freqs = new Array(26).fill(0);

    for (const letter of s) {
        ++freqs[letter.charCodeAt(0) - 0x61];
    }

    return freqs.filter((v) => v % 2 !== 0).length <= 1 ? "YES" : "NO";
}
