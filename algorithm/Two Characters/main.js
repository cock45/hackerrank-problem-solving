// Time Complexity is O(|s|)

function alternate(s) {
    const isAlternating = (t) =>
        !(t < 2 || t.slice(1).some((v, i) => v === t[i]));

    const codes = Array.from(s).map((letter) => letter.charCodeAt(0) - 0x61);

    let maxLen = 0;
    for (let i = 0; i < 26; i++) {
        for (let j = i + 1; j < 26; j++) {
            const t = codes.filter((code) => code === i || code === j);
            if (isAlternating(t) && t.length > maxLen) {
                maxLen = t.length;
            }
        }
    }

    return maxLen;
}
