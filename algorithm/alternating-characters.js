// Time Complexity is O(|s|)

function alternatingCharacters(s) {
    return (
        s.length -
        s.split("A").filter((token) => token.length).length -
        s.split("B").filter((token) => token.length).length
    );
}
