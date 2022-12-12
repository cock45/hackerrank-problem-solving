// Time Complexity is O(|s|)

function anagram(s) {
    if (s.length % 2) {
        return -1;
    }

    const freq = new Array(26).fill(0);

    for (let head = 0, tail = s.length - 1; head < tail; head++, tail--) {
        ++freq[s.charCodeAt(head) - 0x61];
        --freq[s.charCodeAt(tail) - 0x61];
    }

    return freq.filter((f) => f > 0).reduce((sum, cur) => sum + cur, 0);
}
