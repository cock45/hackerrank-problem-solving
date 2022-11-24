// Time Complexity is O(n)

function minimumNumber(n, password) {
    const patterns = [/[a-z]/, /[A-Z]/, /[0-9]/, /[!@#$%^&*()\-+]/];
    const minLength =
        n + patterns.filter((pattern) => password.search(pattern) < 0).length;
    return Math.max(minLength - n, 6 - n);
}
