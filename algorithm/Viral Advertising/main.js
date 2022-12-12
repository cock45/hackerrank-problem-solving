// O(n)
// n: day

function viralAdvertising(n) {
    // Write your code here
    let cumulative = 0;
    let shared = 5;

    for (let day = 0; day < n; day++) {
        shared = Math.floor(shared / 2);
        cumulative += shared;
        shared *= 3;
    }

    return cumulative;
}
