// Time Complexity is O(1)

function decentNumber(n) {
    const numOfThrees = [0, 10, 5][n % 3];

    console.log(
        n < numOfThrees
            ? -1
            : "5".repeat(n - numOfThrees) + "3".repeat(numOfThrees)
    );
}
