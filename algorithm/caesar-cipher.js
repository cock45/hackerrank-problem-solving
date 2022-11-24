// Time Complexity is O(n), n is length of s

function caesarCipher(s, k) {
    const checkLetter = (code) =>
        code >= 0x41 && code <= 0x5a
            ? 1
            : code >= 0x61 && code <= 0x7a
            ? -1
            : 0;

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const f = k % 26;

    const result = [];
    for (const letter of s) {
        let code = letter.charCodeAt(0);

        if (checkLetter(code) > 0) {
            code = code + f > 0x5a ? code - 26 : code;
            result.push(uppercase[code + f - 0x41]);
        } else if (checkLetter(code) < 0) {
            code = code + f > 0x7a ? code - 26 : code;
            result.push(lowercase[code + f - 0x61]);
        } else {
            result.push(letter);
        }
    }

    return result.join("");
}
