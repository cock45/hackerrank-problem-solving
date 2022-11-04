// O(|s|)

function repeatedString(s, n) {
    // Write your code here
    let result = 0;
    const freqInA = s.split('').filter((value) => value === 'a').length;

    if (freqInA === 0) {
        return 0;
    }

    for (let i = 0; i < n % s.length; i++) {
        if (s[i] === 'a') {
            result++;
        }
    }

    result += freqInA * Math.floor(n / s.length);

    return result;
}
