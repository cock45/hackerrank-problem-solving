// Time Complexity is O(n), m is length of special_characters

function minimumNumber(n, password) {
    const patterns = [/[a-z]/, /[A-Z]/, /[0-9]/, /[!@#$%^&*()\-+]/];
    const match = patterns.reduce(
        (c, pattern) => (c = password.search(pattern) > -1 ? c + 1 : c),
        0
    );

    return Math.max(4 - match, 6 - n);
}
