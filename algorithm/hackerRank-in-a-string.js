// Time Complexity is O(|s|)

function hackerrankInString(s) {
    const hackerrank = "hackerrank";

    for (let i = 0, k = 0; i < s.length; i++) {
        if (s[i] === hackerrank[k] && ++k === hackerrank.length) {
            return "YES";
        }
    }

    return "NO";
}
