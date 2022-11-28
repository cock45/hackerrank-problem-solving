// Time Complexity is O(n + |s|)
// Here n is length of queries

function weightedUniformStrings(s, queries) {
    const codes = Array.from(s).map((letter) => letter.charCodeAt(0) - 0x60);

    const freq = new Array(27).fill(0);

    let [head, tail] = [0, 0];

    while (tail < s.length) {
        if (s[tail] !== s[head]) {
            head = tail;
        }

        if (freq[codes[tail]] < tail - head + 1) {
            freq[codes[tail]] = tail - head + 1;
        }

        tail++;
    }

    return queries.map((value) => {
        return freq.some(
            (count, weight) => value % weight === 0 && value <= count * weight
        )
            ? "Yes"
            : "No";
    });
}
