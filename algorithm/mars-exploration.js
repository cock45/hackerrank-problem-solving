// Time Complexity is O(|s|)

function marsExploration(s) {
    return Array.from(s).filter(
        (v, i) => (i % 3 === 1 && v !== "O") || (i % 3 !== 1 && v !== "S")
    ).length;
}
