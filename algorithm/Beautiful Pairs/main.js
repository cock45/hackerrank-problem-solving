// O(nlogn)

function beautifulPairs(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    let i = 0,
        j = 0,
        n = A.length;
    let count = 0;

    while (i < n && j < n) {
        if (A[i] === B[j]) {
            count++;
            i++;
            j++;
        } else if (A[i] > B[j]) {
            j++;
        } else {
            i++;
        }
    }

    return count === n ? n - 1 : count + 1;
}
