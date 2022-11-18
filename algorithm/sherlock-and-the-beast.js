// Time Complexity is O(1)

function decentNumber(n) {
    const r = n % 3;
    const numOfThrees = r === 0 ? 0 : r === 1 ? 10 : 5;

    if (n < 5 + 3 && n % 5 && n % 3) {
        console.log(-1);
    } else {
        console.log("5".repeat(n - numOfThrees) + "3".repeat(numOfThrees));
    }
}
