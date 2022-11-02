function viralAdvertising(n) {
    // Write your code here
    let count = 0;
    let shared = 5;

    for (let dd = 0; dd < n; dd++) {
        shared = Math.floor(shared / 2);
        count += shared;
        shared *= 3;
    }

    return count;
}
