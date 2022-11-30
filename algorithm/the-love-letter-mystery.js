// Time Complexity is O(n)
// Here n is length of arr

function theLoveLetterMystery(s) {
    let count = 0;
    const n = s.length;

    for (let i = 0; 2 * i < n; i++) {
        count += Math.abs(s.charCodeAt(i) - s.charCodeAt(n - i - 1));
    }

    return count;
}
