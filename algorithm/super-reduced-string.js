// Time Complexity is O(n);

function superReducedString(s) {
    let result = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            i++;
            continue;
        } else if (s[i] === result[result.length - 1] && result.length > 0) {
            result.length--;
        } else {
            result.push(s[i]);
        }
    }

    return result.length ? result.join("") : "Empty String";
}
