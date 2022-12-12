// Time Complexity is O(n);

function superReducedString(s) {
    const stk = [];

    for (const letter of s) {
        if (stk.length === 0 || letter !== stk.at(-1)) {
            stk.push(letter);
        } else {
            stk.pop();
        }
    }

    return stk.join("") || "Empty String";
}
