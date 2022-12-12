function circularArrayRotation(a, k, queries) {
    // Write your code here
    const len = a.length;

    return queries.map((query) => a[(len - (k % len) + query) % len]);
}
