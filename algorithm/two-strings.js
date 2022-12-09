// Time Complexity is O(|s1| + |s2|)

function twoStrings(s1, s2) {
    const freq = Array.from(s1).reduce(
        (f, letter) => (++f[letter.charCodeAt(0) - 0x61], f),
        new Array(26).fill(0)
    );

    return Array.from(s2).some((letter) => freq[letter.charCodeAt(0) - 0x61])
        ? "YES"
        : "NO";
}
