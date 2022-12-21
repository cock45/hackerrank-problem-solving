// O(|s|)

function nimbleGame(s) {
    return s.reduce((cur, v, i) => (v % 2 ? cur ^ i : cur), 0)
        ? "First"
        : "Second";
}
