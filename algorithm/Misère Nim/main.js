function misereNim(s) {
    // Time complexity - O(|s|)
    return s.every((v) => v === 1) ^ s.reduce((a, v) => a ^ v)
        ? "First"
        : "Second";
}
