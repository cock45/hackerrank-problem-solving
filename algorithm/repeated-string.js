// O(n), n is the length of s.

function repeatedString(s, n) {
    let result =
        s.split('').filter((letter) => letter === 'a').length *
        Math.floor(n / s.length);

    if (result === 0) {
        return 0;
    }

    for (let i = 0; i < n % s.length; i++) {
        if (s[i] === 'a') {
            result++;
        }
    }

    return result;
}
