// O(N), N is length of B

function fairRations(B) {
    let result = 0;
    let count = 0;

    for (let i = 0; i < B.length; i++) {
        if (B[i] & 1) {
            count++;
            result += 2 * (count & 1 ? -1 : 1) * i;
        }
    }

    return count & 1 ? "NO" : result;
}
