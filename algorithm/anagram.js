// Time Complexity is O(|s|)

function anagram(s) {
    const freq = new Array(26).fill(0);
    const subLen = Math.floor(s.length / 2);

    for (let i = 0; i < subLen; i++) {
        ++freq[s.charCodeAt(i) - 0x61];
        --freq[s.charCodeAt(i + subLen) - 0x61];
    }

    return s.length % 2
        ? -1
        : freq.reduce((sum, cur) => sum + Math.abs(cur), 0) / 2;
}
