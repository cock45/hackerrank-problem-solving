// Time Complexity is O(|s|)

function camelcase(s) {
    return (
        Array.from(s).filter((letter) => letter >= "A" && letter <= "Z")
            .length + 1
    );
}
