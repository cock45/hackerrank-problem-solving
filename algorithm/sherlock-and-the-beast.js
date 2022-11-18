// Time Complexity is O(1)

function decentNumber(n) {
    const r = n % 3;
    const numOfThrees = r === 0 ? 0 : r === 1 ? 10 : 5;

    console.log(
        n < numOfThrees
            ? -1
            : "5".repeat(n - numOfThrees) + "3".repeat(numOfThrees)
    );
}
