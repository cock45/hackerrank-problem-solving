// Time Complexity is O(|s|)

function hackerrankInString(s) {
    const word = "hackerrank";

    let p = 0;

    for (const letter of s) {
        if (letter === word[p]) {
            p++;
        }
    }

    return p === word.length ? "YES" : "NO";
}
