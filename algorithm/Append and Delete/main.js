// O(min{|s|, |t|})

function appendAndDelete(s, t, k) {
    // Write your code here
    let commonPrefixLength = 0;

    while (commonPrefixLength < s.length && commonPrefixLength < t.length) {
        if (s[commonPrefixLength] !== t[commonPrefixLength]) {
            break;
        }

        commonPrefixLength++;
    }

    let minRequiredSteps = s.length + t.length - 2 * commonPrefixLength;

    if (k < minRequiredSteps) {
        return 'No';
    }

    if (k >= s.length + t.length) {
        return 'Yes';
    }

    if ((k - minRequiredSteps) & 1) {
        return 'No';
    }

    return 'Yes';
}
