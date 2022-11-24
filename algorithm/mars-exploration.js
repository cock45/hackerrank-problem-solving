// Time Complexity is O(|s|)

function marsExploration(s) {
    return Array.from(s).filter((v, i) => v !== ((i + 2) % 3 ? "S" : "O"))
        .length;
}
