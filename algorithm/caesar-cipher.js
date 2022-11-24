// Time Complexity is O(n), n is length of s

function caesarCipher(s, k) {
    return Array.from(s)
        .map((letter) => {
            const code = letter.charCodeAt(0);

            if (code >= 0x41 && code <= 0x5a) {
                return String.fromCharCode(((code - 0x41 + k) % 26) + 0x41);
            } else if (code >= 0x61 && code <= 0x7a) {
                return String.fromCharCode(((code - 0x61 + k) % 26) + 0x61);
            } else {
                return letter;
            }
        })
        .join("");
}
