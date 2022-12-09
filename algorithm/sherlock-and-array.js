function balancedSums(arr) {
    let head = 0,
        tail = arr.length - 1;
    let diff = arr[head] - arr[tail];

    while (head < tail) {
        if (diff < 0) {
            diff += arr[++head];
        } else if (diff > 0) {
            diff -= arr[--tail];
        } else {
            diff += arr[++head] - arr[--tail];
        }
    }

    return head === tail && diff === 0 ? "YES" : "NO";
}
