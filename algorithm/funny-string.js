// Time Complexity is O(|s|)

function funnyString(s) {
    const codes = Array.from(s).map((letter) => letter.charCodeAt(0));

    for (let i = 1; i < s.length; i++) {
        if (
            Math.abs(codes[i] - codes[i - 1]) !==
            Math.abs(codes[s.length - i] - codes[s.length - i - 1])
        ) {
            return "Not Funny";
        }
    }

    return "Funny";
}
