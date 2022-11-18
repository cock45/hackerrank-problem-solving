// Time Complexity is O(|A|^2)

function larrysArray(A) {
    if (A.every((value, index) => value === index + 1)) {
        return "YES";
    }

    let count = 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            if (A[i] > A[j]) {
                count++;
            }
        }
    }

    return count % 2 ? "NO" : "YES";
}
