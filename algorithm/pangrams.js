// Time Complexity is O(|s|)

function pangrams(s) {
    const targetCodes = new Array(26).fill(0);

    for (const letter of s) {
        const code = letter.charCodeAt(0);

        if (code >= 0x41 && code <= 0x5a) {
            targetCodes[code - 0x41] = 1;
        }

        if (code >= 0x61 && code <= 0x7a) {
            targetCodes[code - 0x61] = 1;
        }
    }

    const includeLetters = targetCodes.filter(
        (isInclude) => isInclude > 0
    ).length;

    return includeLetters === 26 ? "pangram" : "not pangram";
}
