// Time Complexity is O(|s|)

function funnyString(s) {
    for (let head = 0, tail = s.length - 1; head < tail; head++, tail--) {
        if (
            Math.abs(s.charCodeAt(head + 1) - s.charCodeAt(head)) !=
            Math.abs(s.charCodeAt(tail - 1) - s.charCodeAt(tail))
        ) {
            return "Not Funny";
        }
    }
}
