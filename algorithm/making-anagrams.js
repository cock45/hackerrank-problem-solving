// Time Complexity is O(|s1| + |s2|)

function makingAnagrams(s1, s2) {
    const freq1 = Array.from(s1).reduce(
        (freq, letter) => (++freq[letter.charCodeAt(0) - 0x61], freq),
        new Array(26).fill(0)
    );

    const freq2 = Array.from(s2).reduce(
        (freq1, letter) => (--freq1[letter.charCodeAt(0) - 0x61], freq1),
        freq1
    );

    return freq2.reduce((sum, cur) => sum + Math.abs(cur), 0);
}
