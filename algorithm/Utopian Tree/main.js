function utopianTree(n) {
    // Write your code here
    return (1 << (Math.ceil(n / 2) + 1)) - (1 << n % 2);
}
