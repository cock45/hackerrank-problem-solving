// Time Complexity is O(|s1| + |s2|)

function twoStrings(s1, s2) {
    if (s1.length === 1 || s2.length === 1) {
        return 0;
    }

    function getFreq(str) {
        const freq = new Array(26).fill(0);
        for (const letter of str) {
            ++freq[letter.charCodeAt(0) - 0x61];
        }
        return freq;
    }

    const freq1 = getFreq(s1);
    const freq2 = getFreq(s2);

    for (let i = 0; i < 26; i++) {
        if (freq1[i] && freq2[i]) {
            return "YES";
        }
    }

    return "NO";
}
