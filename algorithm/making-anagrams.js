// Time Complexity is O(|s1| + |s2|)

function makingAnagrams(s1, s2) {
    const freq = [s1, s2]
        .map((s) =>
            Array.from(s).reduce(
                (f, v, i) => (f[s.charCodeAt(i) - 0x61]++, f),
                new Array(26).fill(0)
            )
        )
        .flat();

    return freq.slice(26).reduce((acc, v, i) => acc + Math.abs(v - freq[i]), 0);
}
