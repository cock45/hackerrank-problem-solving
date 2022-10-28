function pageCount(n, p) {
    // Write your code here
    return Math.floor(Math.min(p / 2, (n - p + ((n - 1) % 2)) / 2));
}
