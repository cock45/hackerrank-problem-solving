// Time Complexity is O(n)
// Here n is length of arr

function theLoveLetterMystery(s) {
    let count = 0;

    for (let head = 0, tail = s.length - 1; head < tail; head++, tail--) {
        count += Math.abs(s.charCodeAt(head) - s.charCodeAt(tail));
    }

    return count;
}
