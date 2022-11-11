// O(N), N is length of B

function fairRations(B) {
    let result = 0;

    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] & 1) {
            B[i + 1]++;
            result += 2;
        }
    }

    return B.at(-1) & 1 ? "NO" : result;
}
