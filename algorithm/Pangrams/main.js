// Time Complexity is O(|s|)

function pangrams(s) {
    return new Set(
        Array.from(s.toLowerCase()).filter(
            (letter) => letter >= "a" && letter <= "z"
        )
    ).size === 26
        ? "pangram"
        : "not pangram";
}
