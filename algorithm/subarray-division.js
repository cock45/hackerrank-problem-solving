// Time Complexity is O(|s|)

function birthday(s, d, m) {
    if (m > s.length || m > d) {
        return 0;
    }

    let sum = s.slice(0, m).reduce((prev, cur) => prev + cur, 0);
    let count = sum === d ? 1 : 0;

    for (let i = m; i < s.length; i++) {
        sum += s[i] - s[i - m];

        if (sum === d) {
            count++;
        }
    }

    return count;
}
