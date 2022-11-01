function utopianTree(n) {
    // Write your code here
    return Math.pow(2, Math.ceil(n / 2) + 1) - Math.pow(2, n % 2);
}
