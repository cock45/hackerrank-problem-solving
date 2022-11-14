// O(n), n is the length of b

function happyLadybugs(b) {
    if (!b.includes("_")) {
        if (b[0] !== b[1] || b.at(-1) !== b.at(-2)) {
            return "NO";
        }

        for (let i = 1; i < b.length - 1; i++) {
            if (b[i] !== b[i - 1] && b[i] !== b[i + 1]) {
                return "NO";
            }
        }

        return "YES";
    }

    const types = new Array(26).fill(0);

    for (let i = 0; i < b.length; i++) {
        if (b[i] !== "_") {
            types[b.charCodeAt(i) - 65]++;
        }
    }

    return types.every((type) => type !== 1) ? "YES" : "NO";
}
