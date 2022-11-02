// O(n)
// n: Math.min(sLen, tLen)

function appendAndDelete(s, t, k) {
    // Write your code here
    const [sLen, tLen] = [s.length, t.length];
    let same = 0;

    for (let i = 0; i < Math.min(sLen, tLen); i++) {
        if (s[i] !== t[i]) {
            break;
        }

        same++;
    }

    if (k < sLen + tLen - 2 * same) {
        return 'No';
    } else {
        if (k >= sLen + tLen) {
            return 'Yes';
        }

        if ((k - (sLen + tLen - 2 * same)) % 2) {
            return 'No';
        }

        return 'Yes';
    }
}
